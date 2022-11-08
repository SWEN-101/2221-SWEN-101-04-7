/**
 * Toggles the dropdown menu.
 */
function dropdown(){
    const menuList = document.getElementById("menuList");
    if(menuList.style.display === "none"){
        menuList.style.display = "block";
    } else{
        menuList.style.display = "none";
    }
}
