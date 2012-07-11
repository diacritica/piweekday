from django.contrib import admin
from piweekday.web.models import TeamMember,VideoFile,Project,ImageFile

admin.site.register(TeamMember)
admin.site.register(Project)


admin.site.register(VideoFile)
admin.site.register(ImageFile)
