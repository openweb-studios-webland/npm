;(function() {
  tinymce.PluginManager.add('npm_call_to_action', function(editor, url) {
    editor.addButton('npm_call_to_action', {
      title: 'Call to Action',
      cmd: 'npm_call_to_action',
      image: '/themes/npm/assets/images/megaphone.svg',
    })

    editor.addCommand('npm_call_to_action', function() {
      editor.insertContent('[npm_call_to_action text="" button_text="" button_link=""]')

      return
    })
  })
})()
