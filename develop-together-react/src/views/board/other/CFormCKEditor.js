import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';

const CKEditorBlock = styled.div`
.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    height: 200px;
    margin-bottom: 20px;
}
`;

class CFormCKEditor extends Component {
    
    render() {
        return (
            <CKEditorBlock>
            <div className="App">
                <CKEditor
                    editor={ ClassicEditor }
                    config={{placeholder: "내용을 입력해주세요"}}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        const { onChange2 } = this.props;
                        onChange2(data);
                        // console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
            </CKEditorBlock>
        );
    }
}

export default CFormCKEditor;