import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";
import axios from "axios";

const API_URL = "http://127.0.0.1:8081";

const CKEditorBlock = styled.div`
.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 200px;
    margin-bottom: 20px;
}
`;

export default function Editor({ handleChange, setContent }) {
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
            debugger;
          const body = new FormData();
          const url = "http://127.0.0.1:8081/board/uploadFiles";
          loader.file.then((file) => {
            body.append("files", file);
            axios.post(url, body, { headers: { "Content-Type": "multipart/form-data" } })
              .then((res) => {
                resolve({
                  default: `${API_URL}${res.data}`
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      }
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <CKEditorBlock>
    <div className="form-wrapper">
      <CKEditor className='editor'
        config={{
          extraPlugins: [uploadPlugin]
        }}
        editor={ClassicEditor}
        onReady={(editor) => {}}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
        // onChange={(event, editor) => {
        //   handleChange(editor.getData())
        //   console.log(editor.getData())
        // }}
        onChange={(event, editor) => {
          const data2 = editor.getData();
          setContent(data2)
          console.log(data2)
        }}
      />
    </div>
    </CKEditorBlock>
  );
}