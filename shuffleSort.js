
$( document ).ready(function() {
//shuffle the blocks using Vanilla JS
shuffleBlocks=()=>{
      var container = document.getElementsByClassName("item-container")[0];
      var nodes = container.children;
      for (var i = 1; i < nodes.length; i++) {
            container.append(document.querySelectorAll(".item")[Math.floor(Math.random() * nodes.length)]);
      }

}

//sorting the blocks using jQuery
var my_array = new Array();
    $('.item-container .item').each(function(){
       my_array.push($(this).text());
   });
   $('#sort').on('click', function () {
	        my_array.sort();
     	  	var i=0;
		$(".item").each(function(){
		$(this).html(my_array[i++])
		});
    });
});
