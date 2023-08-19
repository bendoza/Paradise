package main

import (
	"log"
	"net/http"
	"fmt"
	"io"
	"encoding/json"
	"os"
	"strconv"
	"context"

	"google.golang.org/api/option"
	"google.golang.org/api/sheets/v4"
	"golang.org/x/oauth2/google"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

// Get Function for multiple calls, depending on range value specified by function parameter

func GetData(w http.ResponseWriter, r *http.Request, value string) {

	// Making sure the method is a GET request
	if r.Method == "GET" {

		// Attempt to load the environment file, terminate while logging error if fails
		err := godotenv.Load(".env")
		if err != nil {
    		log.Fatal("Error loading .env file")
		}

		// If not, load the key and spreadsheet ID from the env file
		API := os.Getenv("googleApiKey")
		ID := os.Getenv("spreadsheetId")

		// Constructing URL of call via google sheets api for GET request with sheet ID, range value, and api key
		url := "https://sheets.googleapis.com/v4/spreadsheets/" + ID + "/values/" + value + "?key=" + API

		// Attempt get request on google sheets api, terminate and log fatal error if fails
		response, err := http.Get(url)
		if err != nil {
			fmt.Println("Error:", err)
			return
		}

		// Deferring the closing of the response body variable to whenever this (GetData) function exits
		defer response.Body.Close()

		// Initialize a variable for the response from the get request
		var body []byte

		// Attempt to read the response from the get request and store into variable initialized before
		body, err = io.ReadAll(response.Body)
		if err != nil {
			fmt.Println("Error:", err)
			return
		}

		// Initializing a 2d array to store the JSON response of the list of rows from the requested range
		var data struct {
			Values [][]string `json:"values"`
		}

		// Decoding the JSON data returned by the GET requesr
		err = json.Unmarshal(body, &data)
		if err != nil {
			fmt.Println("Error:", err)
			return
		}

		// Encode the values from the response variable into a json response to complete the clients request
		json.NewEncoder(w).Encode(data.Values)

	}
}

func AddVisit(w http.ResponseWriter, r *http.Request) {

	// Making sure the method is a PUT request
	if r.Method == "PUT" {

		err := godotenv.Load(".env")
		if err != nil {
    		log.Fatal("Error loading .env file")
		}

		API := os.Getenv("googleApiKey")
		ID := os.Getenv("spreadsheetId")

		url := "https://sheets.googleapis.com/v4/spreadsheets/" + ID + "/values/ParadiseCraftDistributors!P2" + "?key=" + API

		// Getting the current number of the visit count
		response, err := http.Get(url)
		if err != nil {
			fmt.Println("Error:", err)
			return
		}

		defer response.Body.Close()

		var body []byte
		body, err = io.ReadAll(response.Body)
		if err != nil {
			fmt.Println("Error:", err)
			return
		}

		var data struct {
			Values [][]string `json:"values"`
		}

		err = json.Unmarshal(body, &data)
		if err != nil {
			fmt.Println("Error:", err)
			return
		}

		// Translate string value of the visit count into an integer
		existingValue, err := strconv.Atoi(data.Values[0][0])
		if err != nil {
			fmt.Println("Error:", err)
			return
		}

		// Add 1 to the current value of the visit count
		incrementValue := 1
		newValue := existingValue + incrementValue

		// Initialize variable for google sheets api call
		ctx := context.Background()

		// Attempting to read google credentials for sheets api PUT call
		serviceAccountKey := "/Users/bendoza/Desktop/paradise/Paradise/back/arctic-sound-388921-43b01ba0e3d1.json"
		sa, err := os.ReadFile(serviceAccountKey)
		if err != nil {
			log.Fatalf("Error reading service account key: %v", err)
		}

		// Create config for the PUT call with credentials and google sheets api url
		config, err := google.JWTConfigFromJSON(sa, "https://www.googleapis.com/auth/spreadsheets")
		if err != nil {
			log.Fatalf("Error creating JWT config: %v", err)
		}

		// Initializing google sheets api variable
		client := config.Client(ctx)

		sheetsService, err := sheets.NewService(ctx, option.WithHTTPClient(client))
		if err != nil {
			log.Fatalf("Unable to retrieve Sheets client: %v", err)
		}

		// Selecting cell with visit count value
		rangeToUpdate := "ParadiseCraftDistributors!P2"

		// Initializing the range of the sheet with the new value after increment
		valueRange := sheets.ValueRange{
			Values: [][]interface{}{
				{newValue},
			},
		}

		// PUT new value of the visit count after increment to the spreadsheet at the specified cell
		_, err = sheetsService.Spreadsheets.Values.Update(ID, rangeToUpdate, &valueRange).
			ValueInputOption("RAW").Do()
		if err != nil {
			log.Fatalf("Unable to update value: %v", err)
		}

		// Encode response to complete clients request
		json.NewEncoder(w).Encode(map[string]interface{}{
			"message": fmt.Sprintf("Value incremented by %d successfully", incrementValue),
			"value":   newValue,
		})
	}
}


func main() {

	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	port := os.Getenv("PORT")

	r := mux.NewRouter()

	r.HandleFunc("/GetSpiritTypes", func(w http.ResponseWriter, r *http.Request) {
		GetData(w, r, "ParadiseCraftDistributors!A2:A20")
	}).Methods("GET")

	r.HandleFunc("/GetWineTypes", func(w http.ResponseWriter, r *http.Request) {
		GetData(w, r, "ParadiseCraftDistributors!B2:B20")
	}).Methods("GET")

	r.HandleFunc("/GetProductData", func(w http.ResponseWriter, r *http.Request) {
		GetData(w, r, "ParadiseCraftDistributors!D2:N300")
	}).Methods("GET")

	r.HandleFunc("/AddVisit", func(w http.ResponseWriter, r *http.Request) {
		AddVisit(w, r)
	}).Methods("PUT")

	headers := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE"})
	origins := handlers.AllowedOrigins([]string{"http://localhost:4200"})
	log.Fatal(http.ListenAndServe(":" + port, handlers.CORS(headers, methods, origins)(r)))
}