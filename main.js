function addUser(){
    player1_name = document.getElementById("player_1_name_input").value;
    player2_name = document.getElementById("player_2_name_input").value;
localStorage.setItem("player_1_name-input", player1_name)
localStorage.setItem("player_2_name-input", player2_name)
window.location = "game_page.html";
}