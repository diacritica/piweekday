from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()
import piweekday.settings as settings

urlpatterns = patterns('',
    # Examples:
        
    #create home page    
    url(r'^$', 'piweekday.web.views.home'),
    
    # url(r'^piweekday/', include('piweekday.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^wopr/', include(admin.site.urls)),

    url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {
                'document_root': settings.STATIC_ROOT,
                        }),
    )
