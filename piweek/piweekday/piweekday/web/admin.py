from django.contrib import admin
from piweekday.web.models import TeamMember, VideoFile, Project, ImageFile, PopEvent

class CommonMedia:
  js = (
    'https://ajax.googleapis.com/ajax/libs/dojo/1.6.0/dojo/dojo.xd.js',
    '/static/js/editor.js',
  )
  css = {
    'all': ('/static/css/editor.css',),
  }



class ProjectAdmin(admin.ModelAdmin):
     filter_horizontal = ("videos","images","members")
     list_display = ('title',)
     Media = CommonMedia

class PopEventAdmin(admin.ModelAdmin):
     list_display = ('name','person')
     Media = CommonMedia


admin.site.register(Project, ProjectAdmin)
admin.site.register(TeamMember)
admin.site.register(VideoFile)
admin.site.register(ImageFile)
admin.site.register(PopEvent,PopEventAdmin)

