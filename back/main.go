package main

import (
	"log"
	"net/http"
	"fmt"
	"io"
	"encoding/json"
	"os"

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

	headers := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE"})
	origins := handlers.AllowedOrigins([]string{"http://localhost:4200"})
	log.Fatal(http.ListenAndServe(":" + port, handlers.CORS(headers, methods, origins)(r)))
}