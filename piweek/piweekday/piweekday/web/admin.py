from django.contrib import admin
from piweekday.web.models import TeamMember, VideoFile, Project, ImageFile

class CommonMedia:
  js = (
    'https://ajax.googleapis.com/ajax/libs/dojo/1.6.0/dojo/dojo.xd.js',
    '/js/editor.js',
  )
  css = {
    'all': ('/css/editor.css',),
  }



class ProjectAdmin(admin.ModelAdmin):
     filter_horizontal = ("videos","images","members")
     list_display = ('title',)
     Media = CommonMedia


admin.site.register(Project, ProjectAdmin)
admin.site.register(TeamMember)
admin.site.register(VideoFile)
admin.site.register(ImageFile)

