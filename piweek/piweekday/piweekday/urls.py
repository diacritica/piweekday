from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()
import piweekday.settings as settings

urlpatterns = patterns('',
    # Examples:

    url(r'^atom/', include('piweekday.atomreader.atomreaderurls')),

    #homepage
    url(r'^$', 'piweekday.web.views.home'),

    #piweek page
    url(r'^piweek/$', 'piweekday.web.views.piweek'),

    #projects page
    url(r'^projects/$', 'piweekday.web.views.projects'),

    #projects single page
    url(r'^project/(?P<project_slug>[\w-]+)$', 'piweekday.web.views.projectView'),

    url(r'^project/$', 'piweekday.web.views.projects'),
    
    #multipleVideo single page
    url(r'^videos/$', 'piweekday.web.views.videoView'),

    # url(r'^piweekday/', include('piweekday.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^wopr/', include(admin.site.urls)),

    url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {
                'document_root': settings.STATIC_ROOT,
                        }),
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {
                'document_root': settings.MEDIA_ROOT,
                        }),


    )
