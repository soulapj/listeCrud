let tableau = [];
console.log(tableau);


class Livre {
    #title; 
    #author;
    #year;
    constructor(titre, auteur,annee){
        this.#title = titre;
        this.#author = auteur;
        this.#year = annee;
    }
    getTitle(){
        return this.#title;
    }
    setTitle(titre){
        this.#title = titre;
    }
    getAuthor(){
        return this.#author;
    }
    setAuthor(auteur){
        this.#author = auteur;
    }
    getYear(){
        return this.#year;
    }
    setYear(annee){
        this.#year = annee;
    }
    addBookToList(){
        let list = document.querySelector(".list-col");
        list.innerHTML += `
        <div class="livre">
          <span>${this.#title}</span>
          <span>${this.#author}</span>
          <span>${this.#year}</span>
          <button class="delete">X</button>
        </div>`
        this.attachEvent();
        
    } 

    attachEvent(){
        let list = document.querySelector(".list-col");
        let deleteBtn = list.querySelectorAll(".delete");
        deleteBtn.forEach(btn => {
            btn.addEventListener("click", (event) =>{
                this.removeBookToList(event);
            } )
        })
    }

    removeBookToList(event){
        let row = event.target.parentElement
        console.log(row);
        if(confirm("êtes vous sur de bien vouloir suprimer ?")){
            row.remove();
            Livre.showAlert("Le livre à bien été supprimer", "succes");
        }
    }

    static verif(titre, auteur, annee){
        return tableau.some(valtab => valtab.#title === titre && valtab.#author === auteur && valtab.#year === annee);
    
    }

    static clearFields(){
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#year").value = "";
    }

    static addBookToArray(value){
        tableau.push(value);
    }

    static showAlert(message, className){
        let alertt = document.querySelector(".alert");
        alertt.classList.add(className);
        alertt.textContent = message;
        alertt.style.opacity = "1" ;
        setTimeout(()=>{
            alertt.style.opacity = "0"
        },3000);
    }

}

let bouton = document.querySelector(".submit");
bouton.addEventListener("click", ()=>{
    let titre = document.querySelector("#title").value;
    let auteur = document.querySelector("#author").value;
    let annee = document.querySelector("#year").value;
    
    if(Livre.verif(titre, auteur, annee)){
        Livre.showAlert("ce livre existe déjà","error")
        return;
    }

    if(titre !=="" && auteur!=="" && annee !==""){
        let book = new Livre(titre, auteur, annee);
        book.addBookToList();
        Livre.clearFields();
        Livre.addBookToArray(book);
        Livre.showAlert("Le livre à bien été ajouter","succes")
    }
    else{
        Livre.showAlert("veuillez remplir tout les champs","error");
    }
})


