package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type User struct {
	Avatar     string `json:"ava"` 
	FirstName  string `json:"first_name"`
	LastName   string `json:"last_name"`
	FullName   string `json:"full_name"`
	NickName   string `json:"nickname"`
	Location   string `json:"location"`
	Occupation string `json:"occupation"`
}


var user = []User{
	{
		"https://gravatar.com/avatar/940bd27cf337191dcf9e9171ecf2ad57?size=256",
	 	"Stepan",
	 	"Mamashin",
		"Stepan Mamashin",
		"SMamashin",
		"Fi, Helsinki",
		"Developer",
	},
}


func getUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(user); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}


func main() {
	http.HandleFunc("/user", getUser)

	fmt.Println("Server is running on port 8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Println("Error starting server:", err)
	}
}
//df