$("#add_complaint").submit(function(event){
    alert("Complaint Submitted Successfully!")
})
$("#update_complaint").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    let request = {
        "url" : `http://localhost:3000/complaints/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Complaint Updated Successfully!");
    })

})
if(window.location.pathname == '/'){
    $ondelete = $(".icons a.delete")
    $ondelete.click(function(){
        let id = $(this).attr("data-id")
        let request = {
            "url" : `http://localhost:3000/complaints/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you want to delete this complaint?")){
            $.ajax(request).done(function(response){
                alert("Complaint Deleted Successfully!");
                location.reload()
            }) 
        }
    
    })
}