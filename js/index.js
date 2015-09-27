$(function(){

$('#search-term').submit(function(event){
	event.preventDefault();
	var searchTerm = $('#query').val();
  
  	getRequest(searchTerm);
   	
    })
})


function getRequest(searchTerm){

	var params = {
		s: searchTerm,
		r: 'json',
		part: 'snippet',
		key:  'AIzaSyDLxnE_YORIz0G7DFkWojZQYiJ0dOJjdVY'
	};
	url =  "https://www.googleapis.com/youtube/v3/search" ;

  $.getJSON(url, params, function(data){
    //myData = data.Search;

    console.log(data.items[0].snippet)
  
    showResults(data.items);
})
}


function showResults(results){

	  $('#search-results').empty();

	var html = '';

	 $.each(results, function(index, value){

	 	html += '<img src="'+value.snippet.thumbnails.medium.url+'">';

    	console.log(value.snippet.thumbnails.medium.url);
    	
})

	 $('#search-results').append(html);
  
};