import { Component, VERSION } from '@angular/core';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  editor = DecoupledEditor;
  public onReady(editor) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
  }
  data: any = `<div style="max-width: 905px;">
  <p><b>Kính gửi Anh/Chị,</b></p>
  <p>Phương án đã được chuyển tiếp về luồng xử lý thủ công.</p>
  <p>File Id:.</p>
  <p>Lý do: </p>
  <p>Thời gian chuyển tiếp: </p>
  <p>Trong quá trình xử lý, nếu có vướng mắc anh/chị vui lòng liên hệ bộ phận IT để được hỗ trợ.</p>
</div>
<div>
  <p>-------------------------------------------------BPM TEAM-------------------------------------------------</p>
  <p style="color:red">ĐÂY LÀ EMAIL CẢNH BÁO. VUI LÒNG KHÔNG TRẢ LỜI EMAIL NÀY!!!</p>
</div>

`;
}
