 
 $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          responsive:{
              0:{
                  items:2
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
          }
      })
 $(function(){
	$('#zoom1').bind('click',function(){
	    var cloudZoom = $(this).data('CloudZoom'); 
	        cloudZoom.closeZoom();
	        $.fancybox.open(cloudZoom.getGalleryList());
	        return false;
	    });
	});
	    
	CloudZoom.quickStart(); // cz

var size=document.getElementById('size','size2','size3','size4','size5');
function choose_size(){
	if(size.style.border == '1px solid red'){
		size.style.border = '1px solid rgba(0,0,0,.09)';
	}else{
		size.style.border = '1px solid red';
	}
	
}
// click chọn tất cả trang sản phẩm
           function checkall() 
            {
                // Lấy danh sách checkbox
                var checkboxes = document.getElementsByName('check[]');
 
                // Lặp và thiết lập checked
                for (var i = 0; i < checkboxes.length; i++){
                	if(checkboxes[i].checked == true) {
                      checkboxes[i].checked = false;
                	}else{
                		checkboxes[i].checked = true;
                	}
                	
                }
            };
// Thay đổi ảnh
// var change_img = [];
// change_img.push[$('.image')];
console.log(image[0]);
var detail_img = [];
detail_img.push[$('.glyphicon-search')];
$('.glyphicon-search').click(function(){
  var txt = $(this).attr('id').substr(4);
  for (var i = 0; i < detail_img.length; i++) {
    if (txt-1==i) {
      console.log(detail_img[i]);
        $('#img_modal').src = change_img[i].attr("src");
    }
  }
});