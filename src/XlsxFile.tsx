import React, { Component } from 'react';
import * as XLSX from 'xlsx';

function showFile (e: any) {
    var file = e.target.files[0];
    // input canceled, return
    if (!file) return;

    var FR = new FileReader();

    FR.onload = function(e) {
        var data = new Uint8Array(file);
        var workbook = XLSX.read(data, {type: 'array'});
        var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        
        // header: 1 instructs xlsx to create an 'array of arrays'
        var result = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
        return result
    };

    FR.readAsArrayBuffer(file);

    return (
      <div className="result"> 

        <label className="custom-file-upload">
          <input type="file"/>
          <i className="fa-cloud-upload"></i> Custom Upload
        </label>

        {/* <input type="file"                
               id="fileSelect" 
               name="fileSelect" 
               accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" 
               onChange={FR.onload(e)
               } />
        <div id="show-text">Choose text File</div> */}
      </div>
    )
}

export default showFile;