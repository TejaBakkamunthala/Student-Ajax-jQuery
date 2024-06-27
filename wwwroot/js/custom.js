$(document).ready(function () {
    ShowStudentData();
});

function ShowStudentData() {
    $.ajax({
        url: '/Ajax/StudentList',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, status, xhr) {
            var object = '';
            $.each(result, function (index, item) {
                object += '<tr>';
                object += '<td>' + item.id + '</td>';
                object += '<td>' + item.name + '</td>';
                object += '<td>' + item.fees + '</td>';
                object += '<td>' + item.city + '</td>';
                object += '<td>' + item.state + '</td>';
                object += '<td>' + item.city + '</td>';
                object += '<td>' + item.country + '</td>';
                object += '<td><a href="#" class="btn btn-primary" onclick="Edit(' + item.id + ')">Edit</a> || <a href="#" class="btn btn-danger" onclick="Delete(' + item.id + ')">Delete</a> </td>';
                object += '<tr>';
            });
            $('#table_data').html(object);

        },
        error: function () {
            alert("Data can't retrieved..");
        }

    });
};

$('#btnAddStudent').click(function () {
    clearTextBox();
    $('#StudentModal').modal('show');
    $('#StdId').hide();
    $('#btnSave').css('display', 'block');
    $('#btnUpdate').css('display', 'none');
    $('#stdHeading').text('AddStudent');

});

function AddStudent() {
    var objdata = {
        Name: $('#Name').val(),
        Fees: $('#Fees').val(),
        City: $('#City').val(),
        State: $('#State').val(),
        Country: $('#Country').val(),
    };
    $.ajax({
        url: '/Ajax/AddStudent',
        type: 'Post',
        data: objdata,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
        dataType: 'json',
        success: function () {
            alert('Data Saved');
            clearTextBox();
            ShowStudentData();
            HideModalPopUp();
        },
        error: function () {
            alert("Data can't Saved");
        }
    });
}

function HideModalPopUp() {
    $('#StudentModal').modal('hide');
}


$('#btnCloseMark').click(function () {
    $('#StudentModal').modal('hide');
})

$('#btnClose').click(function () {
    $('#StudentModal').modal('hide');
})



function clearTextBox() {
    $('#Name').val('');
    $('#Fees').val('');
    $('#City').val('');
    $('#State').val('');
    $('#Country').val('');
    $('#Id').val('');
}



function Delete(id) {
    if (confirm('Are You sure ,you want to delete this record ')) {

        $.ajax({
            url: '/Ajax/Delete?id=' + id,
            success: function () {
                alert('Record Deleted!');
                ShowStudentData();
            },
            error: function () {
                alert('Data cant be deleted');
            }
        })
    }
}

function Edit(id) {

    $.ajax({
        url: '/Ajax/Edit?id=' + id,
        type: 'Get',
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        success: function (response) {
            $('#StudentModal').modal('show');
            $('#Id').val(response.id);
            $('#Name').val(response.name);
            $('#Fees').val(response.fees);
            $('#City').val(response.city);
            $('#State').val(response.state);
            $('#Country').val(response.country);
           
            $('#btnSave').css('display', 'none');
            $('#btnUpdate').css('display', 'block');
            $('#stdHeading').text('UpdateStudent');

            //$('#btnSave').hide();
            //$('btnUpdate').show();

        },
        error: function () {
            alert('Data Not Found');
        }


    })
}

function UpdateStudent() {
    var objData = {
        Id: $('#Id').val(),
        Name: $('#Name').val(),
        Fees: $('#Fees').val(),
        City: $('#City').val(),
        State: $('#State').val(),
        Country: $('#Country').val(),
    }
    $.ajax({
        url: 'Ajax/Update',
        type: 'Post',
        data: objData,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
        dataType: 'json',
        success: function () {
            alert('Data Updated');
            clearTextBox();
            ShowStudentData();
            HideModalPopUp();
        },
        error: function () {
            alert("Data can't Updated");
        }
    });


}


