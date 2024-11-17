
// <div class="main_panel">
//       <div class="body_panel">
//         <img src="../data/Session-6/image/1-highway_map.png" alt="" />
//         <p class="image_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus placeat molestias necessitatibus est eos nostrum perferendis natus sunt consectetur dolore blanditiis voluptates similique consequuntur amet iusto, minus unde ipsam beatae.</p>
//       </div>
//       <div class="slide_panel">
//         <img src="../data/Session-6/image/1-highway_map.png" alt="1" />
//         <img src="../data/Session-6/image/2-save_layer.png" alt="2" />
//         <img src="../data/Session-6/image/3-blood_style.png" alt="3" />
//       </div>
//     </div>

const slide_panel_img = document.querySelectorAll(".slide_panel img");
      const main_img = document.querySelector(".body_panel img");
      const desctiption = document.querySelector(".image_description");
      slide_panel_img.forEach((image) => {
        image.addEventListener("click", () => {
          slide_panel_img.forEach((img) => {
            img.style.borderBottom = "none";
          });
          image.style.borderBottom = "2px solid #343a40";
          main_img.src = image.src;
          desctiption.textContent = image.alt;
        });
      });