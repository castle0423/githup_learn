
//上传游记头图
$("#myfile").change(function () {

     $("#headImgForm").ajaxSubmit({
        type:"POST",
        url:"/ssm_demo/note/headImgUpload" ,
        dataType:"json",
         success:function(result){

             var filePath = result.data.filePath;
             console.log("file upload result:"+JSON.stringify(filePath));
             var imgUrl = "url(/ssm_demo/"+filePath+")";
             console.log("imgUrl:"+imgUrl);
             $(".set-note-bg").css("backgroundImage",imgUrl);
             console.log("okokok...");
             $(".setNoteHeaderImgForm").hide();
             $(".setNoteHeaderImgTip").hide();
             $("#headImgPath").val(imgUrl);
         }
     });
});


//提交添加游记

$("#submitNoteBtn").click(function () {
    $.ajax({
        type:"POST",
        url:"/ssm_demo/note/add" ,
        data: $('#noteForm').serialize(),
        success:function(result){
            if(result.status=="SUCCESS"){
                //添加游记成功后，跳转到我的游记列表
                window.location.href="/ssm_demo/note/goToDetail"

            }else{
                //添加游记失败
                $("#note_tip").text(result.data.reason);
            }
        }
    });
});