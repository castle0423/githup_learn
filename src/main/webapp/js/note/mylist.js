//获得我的所有游记
$.get("/ssm_demo/note/myNoteList",{},function (result) {

    var noteList = result.data.myNoteList;
    console.log("noteList...................:"+noteList);
    $.each(noteList,function(index,item){
        console.log("noteId:"+ item.noteId);
        console.log("custId:"+ item.custId);
        console.log("noteTitle:"+ item.noteTitle);
        console.log("noteTripDate:"+ item.noteTripDate);
        console.log("============================");
    });

});