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

func GetData(w http.ResponseWriter, r *http.Request, value string) {

	if r.Method == "GET" {

		err := godotenv.Load(".env")
		if err != nil {
    		log.Fatal("Error loading .env file")
		}

		API := os.Getenv("googleApiKey")
		ID := os.Getenv("spreadsheetId")

		url := "https://sheets.googleapis.com/v4/spreadsheets/" + ID + "/values/" + value + "?key=" + API

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

		json.NewEncoder(w).Encode(data.Values)

	}
}

func AddVisit(w http.ResponseWriter, r *http.Request) {

	if r.Method == "PUT" {

		err := godotenv.Load(".env")
		if err != nil {
    		log.Fatal("Error loading .env file")
		}

		API := os.Getenv("googleApiKey")
		ID := os.Getenv("spreadsheetId")

		url := "https://sheets.googleapis.com/v4/spreadsheets/" + ID + "/values/ParadiseCraftDistributors!P2" + "?key=" + API

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

		existingValue, err := strconv.Atoi(data.Values[0][0])
		if err != nil {
			fmt.Println("Error:", err)
			return
		}

		incrementValue := 1
		newValue := existingValue + incrementValue

		ctx := context.Background()

		serviceAccountKey := "/Users/bendoza/Desktop/paradise/Paradise/back/arctic-sound-388921-43b01ba0e3d1.json"
		sa, err := os.ReadFile(serviceAccountKey)
		if err != nil {
			log.Fatalf("Error reading service account key: %v", err)
		}

		config, err := google.JWTConfigFromJSON(sa, "https://www.googleapis.com/auth/spreadsheets")
		if err != nil {
			log.Fatalf("Error creating JWT config: %v", err)
		}

		client := config.Client(ctx)

		sheetsService, err := sheets.NewService(ctx, option.WithHTTPClient(client))
		if err != nil {
			log.Fatalf("Unable to retrieve Sheets client: %v", err)
		}

		rangeToUpdate := "ParadiseCraftDistributors!P2"

		valueRange := sheets.ValueRange{
			Values: [][]interface{}{
				{newValue},
			},
		}

		_, err = sheetsService.Spreadsheets.Values.Update(ID, rangeToUpdate, &valueRange).
			ValueInputOption("RAW").Do()
		if err != nil {
			log.Fatalf("Unable to update value: %v", err)
		}

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