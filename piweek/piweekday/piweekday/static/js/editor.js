dojo.require("dijit.Editor");

// extra plugins
dojo.require("dijit._editor.plugins.FontChoice");
dojo.require("dijit._editor.plugins.LinkDialog");
dojo.require("dojox.editor.plugins.ShowBlockNodes");
dojo.require("dijit._editor.plugins.ViewSource");
dojo.require("dojox.editor.plugins.InsertEntity");

// headless plugins
dojo.require("dojox.editor.plugins.NormalizeIndentOutdent");
dojo.require("dojox.editor.plugins.PrettyPrint"); // let's pretty-print our HTML
dojo.require("dojox.editor.plugins.AutoUrlLink");
dojo.require("dojox.editor.plugins.ToolbarLineBreak");

dojo.ready(function(){
  var textareas = dojo.query("textarea");
  if(textareas && textareas.length){
    dojo.addClass(dojo.body(), "claro");
    dojo.forEach(textareas, function(textarea) {
            
        //Create the editor on click
	dojo.connect(textarea, 'click', function (event) {
	    
	    dojo.style(textarea, {'display' : 'none'});
	    
	        var editor_div = dojo.create('div');
	        dojo.place(editor_div, textarea, 'after');
	    dojo.style(editor_div, {
		height: '340px',
		 width  : '610px',
		'float': 'left',});
	    
	     
	     
	    var editor = new dijit.Editor({
		      styleSheets: "/static/css/roadmap.css",
		      plugins: [

			          "bold", "italic", "underline", "strikethrough", "|",
			          "insertOrderedList", "insertUnorderedList",  
			          "formatBlock", "createLink",  "|", "viewsource",
			          // headless plugins
			          "normalizeindentoutdent", "prettyprint",
			          "autourllink", "dijit._editor.plugins.EnterKeyHandling"
			        ],
		      onBlur: function (event) {
			  textarea.value = this.get('value');
			  //Destroy the editor on blur
			  editor_div.parentNode.removeChild(editor_div);
			  dojo.style(textarea, {'display' : 'block'});
			  this.destroyRecursive();
			        }
		    }, editor_div);

	    editor.onLoadDeferred.then(function () {
		editor.set('value', textarea.value);
		editor.focus();
		})
	    });
    });
  }
});
