function filter(){

    var input, filterValue, tr, td, i;

        input = document.getElementById('search');
        filterValue = input.value.toUpperCase();
        tr = document.getElementsByTagName('tr');

        for(i=1 ; i < tr.length ; i++){
            var result = tr[i].innerText;
            if(result.toUpperCase().indexOf(filterValue) > -1){
                tr[i].style.display ="";
            }else{
                tr[i].style.display = "none";
            }
    }
}