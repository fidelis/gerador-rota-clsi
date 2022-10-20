import React, { Component } from 'react';
import * as XLSX from 'xlsx';
import "./File.css";

export default function file() {
  
  const showFile = async (e) => {
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
        
        // data preview
        var output = document.getElementById('result');
        output.innerHTML = JSON.stringify(result, null, 2);
      };
    FR.readAsArrayBuffer(file);
  }

    return (
      <div id="result"> 
        <div id="show-text">Choose text File</div>
      </div>
    )
}