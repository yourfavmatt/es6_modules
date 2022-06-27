import Wishlist from "./Wishlist";
import Car from "./Car";

let wishlist = new Wishlist();
let car = new Car("Ford", "Mustang", 2022);

wishlist.add(car);
    
    console.log(wishlist);

    wishlist


    let form = document.querySelector("#submitForm");
    let makeInput = document.querySelector("#makeInput");
    let modelInput = document.querySelector("#modelInput");
    let yearInput = document.querySelector("#yearInput");

    let wishlistUl = document.querySelector("#wishListContainer > ul");
    let makeP = document.querySelector("#car-make");
    let modelP = document.querySelector("#car-model");
    let yearP = document.querySelector("#car-year");
    let removeBtn = document.querySelector("#removeBtn");


    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let make = makeInput.value;
        let model = modelInput.value;
        let year = yearInput.value;

        let car = new Car(make, model, year);

        // Will add new car to wishlist
        wishlist.add(car);
      
        // Will update dom
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = car.model;
      
        
        li.addEventListener("click", (event) => {
          
          makeP.textContent = car.make;
          modelP.textContent = car.model;
          yearP.textContent = car.year;
      
         
          removeBtn.disabled = false;
          removeBtn.onclick = (event) => {
          
            wishlist.remove(car);
      
           
            makeP.textContent = "";
            modelP.textContent = "";
            yearP.textContent = "";
      
           
            removeBtn.disabled = true;
      
        
            wishlistUl.removeChild(li);
          };
        });
      
        wishlistUl.appendChild(li);
      
        
        makeInput.value = "";
        modelInput.value = "";
        yearInput.value = "";
      });
      