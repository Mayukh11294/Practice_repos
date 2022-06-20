import React, { useState } from 'react';
import './style.css';
import numberToWords from 'number-to-words';
import { tagsToBeReplaced } from './Utils.js';

export default function App() {
  let [html, setHtml] = useState({
    __html:
      '<div> <span><b>{FirstName}{LastName}</b></span> </div><div class="mt-05"> <span>{Address}</span> </div><div class="mt-05 d-flex jc-space-bt"> <span>Date</span> <span class="ml-2"><b>{SystemDate}</b></span></div><div> <span><b>{FirstName}{LastName}</b></span> </div><div class="mt-05"> <span>{Address}</span> </div><div class="mt-05 d-flex jc-space-bt"> <span>Date</span> <span class="ml-2"><b>{SystemDate}</b></span></div>',
  });

  function replaceTags(value) {
    tagsToBeReplaced.forEach((c) => {
      let count = value.match(new RegExp(c, 'gi') || [])?.length;
      if (count > 0) {
        for (let i = 0; i < count; i++) {
          switch (c) {
            case '{FirstName}':
              value = value?.replace(c, 'Mayukh');
              break;
            case '{LastName}':
              value = value?.replace(c, 'Mukherjee');
              break;
            case '{SystemDate}':
              value = value?.replace(c, new Date().toLocaleDateString());
              break;
            default:
              value = value;
              break;
          }
        }
      }
    });
    setHtml({ ...html, __html: value });
  }
  return (
    <div>
      <div dangerouslySetInnerHTML={html}></div>
      <br />
      <div>
        <button
          onClick={(e) => {
            replaceTags(html.__html);
          }}
        >
          ReplaceTags
        </button>
      </div>
    </div>
  );
}
