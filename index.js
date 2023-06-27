// pinned image toggle starts

var pin_image_wrap = document.getElementsByClassName("pin_image_wrap");
pin_image_wrap[0].addEventListener("click",(e)=>{
    //e.target.children.toggle;
    if(e.target.offsetParent.classList.contains("pin_image_wrap")){
        pin_image_wrap[0].getElementsByClassName("pin_image")[0].classList.toggle("display_none");
        pin_image_wrap[0].getElementsByClassName("pin_image")[1].classList.toggle("display_none");
    }
    
})

// pinned image toggle ends

// notes save starts

var save_note = document.getElementById("save_note");
var notes_title = document.getElementById("notes_title");
var notes_desc = document.getElementById("notes_desc");

save_note.addEventListener("click",()=>{
    console.log(notes_title.value);
    if(notes_title.value =="" || notes_desc.value ==""){
        alert("Enter in both the fields");
    }else{
        
        var col_wrap = document.createElement('div');
        col_wrap.classList.add("notes_col_wrap");
        document.getElementsByClassName("notes_taken_inside")[0].prepend(col_wrap);

        note_content = "";
        // note_content += '<div class="notes_col_wrap">';
        note_content += '<div class="notes_col_inside">';
        note_content += '<div class="notes_col_title_main">';
        note_content += '<div class="notes_col_title">';
        note_content += '<h2>'+notes_title.value+'</h2>';
        note_content += '</div>';
        note_content += '</div>';
        note_content += '<div class="notes_col_desc_main">';
        note_content += '<div class="notes_col_desc">';
        note_content += '<p>'+notes_desc.value+'';
        note_content += '</p>';
        note_content += '</div>';
        note_content += '</div>';
        note_content += '<div class="notes_col_readmore_main">';
        note_content += '<div class="notes_col_readmore">';
        note_content += '<a href="#">Read More</a>';
        note_content += '</div>';
        note_content += '</div>';
        note_content += '<div class="notes_col_footer_main">';
        note_content += '<div class="notes_col_footer">';
        note_content += '<a href="#" class="edit">Edit</a><a href="#" class="delete_note">Delete</a>';
        note_content += '</div>';
        note_content += '</div>';
        note_content += '</div>';
        // note_content += '</div>';
        document.getElementsByClassName("notes_col_wrap")[0].innerHTML=note_content;
        notes_title.value ="";
        notes_desc.value ="";
    }
    
})

// notes save ends

// demo data starts

var demo_data = document.getElementById("demo_data");
demo_data.addEventListener("click",()=>{
    //document.getElementsByClassName("notes_taken_inside")[0].innerHTML = "";
    var demo;
    for(demo=1;demo<21;demo++){

        var col_wrap = document.createElement('div');
        col_wrap.classList.add("notes_col_wrap");
        document.getElementsByClassName("notes_taken_inside")[0].prepend(col_wrap);

        note_content = "";
        // note_content += '<div class="notes_col_wrap">';
        note_content += '<div class="notes_col_inside">';
        note_content += '<div class="notes_col_title_main">';
        note_content += '<div class="notes_col_title">';
        note_content += '<h2>'+demo+' Title</h2>';
        note_content += '</div>';
        note_content += '</div>';
        note_content += '<div class="notes_col_desc_main">';
        note_content += '<div class="notes_col_desc">';
        note_content += '<p>'+demo+' Description';
        note_content += '</p>';
        note_content += '</div>';
        note_content += '</div>';
        note_content += '<div class="notes_col_readmore_main">';
        note_content += '<div class="notes_col_readmore">';
        note_content += '<a href="#">Read More</a>';
        note_content += '</div>';
        note_content += '</div>';
        note_content += '<div class="notes_col_footer_main">';
        note_content += '<div class="notes_col_footer">';
        note_content += '<a href="#" class="edit">Edit</a><a href="#" class="delete_note">Delete</a>';
        note_content += '</div>';
        note_content += '</div>';
        note_content += '</div>';
        // note_content += '</div>';
        document.getElementsByClassName("notes_col_wrap")[0].innerHTML=note_content;
        

    }   
})

// demo data ends

// reset starts
var reset_note = document.getElementById("reset_note");
reset_note.addEventListener("click",()=>{
    notes_title.value ="";
    notes_desc.value ="";

})
// reset ends

// delete starts
demo_data.addEventListener("click",()=>{
    var delete_note = document.getElementsByClassName("delete_note");
    var delete_note_i;

    for(delete_note_i=0;delete_note_i<delete_note.length;delete_note_i++){

        delete_note[delete_note_i].addEventListener("click",(e)=>{

            e.target.closest(".notes_col_wrap").remove();

        })
    }

})
// delete ends

// delete starts
demo_data.addEventListener("click",()=>{
    var edit_note = document.getElementsByClassName("edit");
    var edit_note_i;

    for(edit_note_i=0;edit_note_i<edit_note.length;edit_note_i++){

        edit_note[edit_note_i].addEventListener("click",(e)=>{

            console.log(e.target.closest(".notes_col_wrap").getElementsByClassName("notes_col_desc")[0].getElementsByTagName("p")[0].innerHTML);

        })
    }

})
// delete ends