import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, Table, Video, Audio, PasteCleanup, 
ClipBoardCleanup, AutoFormat } from '@syncfusion/ej2-react-richtexteditor';
export default function RTE() {
  let rteObj: RichTextEditorComponent;
  const getHtml = () => {
    console.log(rteObj.getHtml());
  }
  const toolbarSettings = {
    items: ['Bold','Italic','Undo','Redo','CreateTable','Image','CreateLink']
  };

  return (
    <div className="control-section" style={{padding: "70px", margin: "0 auto" }}>
      <button onClick={getHtml}>
        Get HTML
      </button>
      <RichTextEditorComponent id="defaultRTE" ref={(richtexteditor: RichTextEditorComponent) => { rteObj = richtexteditor }} 
      toolbarSettings = {toolbarSettings}>
      <h2>Welcome to the Rich Text Editor Demo!</h2><p>The Rich Text Editor control is a WYSIWYG ("what you see is what you get") editor 
      that provides the best user experience to create and update the content. Users can format their content using standard toolbar 
      commands.</p><h4>Flexible Editing!</h4><p>For a better editing experience, the React Rich Text Editor component offers a variety 
      of tools and choices. So, you can quickly insert <strong>images</strong>, <strong>videos</strong>, <strong>hyperlinks</strong>, 
      and <strong>tables</strong>; <strong>merge table cells</strong>; and configure.</p><p>You can easily format the text and paragraphs 
      by setting the editor’s foreground and <strong>background colors</strong>, <strong>font type</strong>, <strong>italicization</strong>, 
      <strong> adding ordered </strong>and <strong>unordered custom lists</strong>, <strong>underlining</strong>, <strong>strikethrough
      </strong>, and <strong>bolding</strong>.<br/><br/></p><p><img alt="Editor Features Overview" 
      src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png" width="400" height="200" className="e-img-left"/></p>
      <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar, Table, Video, Audio, PasteCleanup, ClipBoardCleanup, AutoFormat]} />
      </RichTextEditorComponent>
    </div>
  );
}