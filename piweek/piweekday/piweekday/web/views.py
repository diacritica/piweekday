# Create your views here.

from django.shortcuts import render_to_response
from piweekday.web.models import *
from django.http import HttpResponse
from piweekday.settings import STATIC_URL, MEDIA_URL #fixme, requestContext

from piweekday.atomreader.models import GithubRepo
from piweekday.atomreader.views import GithubAtomFeedView

def home(request):
    return render_to_response('web/home.html',  {'STATIC_URL': STATIC_URL})

def piweek(request):
    return render_to_response('web/piweek.html',  {'STATIC_URL': STATIC_URL})

def projects(request):
    return render_to_response('web/projectView.html',  {'STATIC_URL': STATIC_URL})

def projectView(request, project_slug):

    project = Project.objects.get(slug=project_slug)
    feed = GithubAtomFeedView(project.githubrepo)[:5]

    return render_to_response('web/projectView.html',  {'STATIC_URL': STATIC_URL, 'MEDIA_URL':MEDIA_URL, "project":project, 'feed':feed})


#def viewPoll(request, poll_id):
#    mypoll = Poll.objects.get(pk=poll_id)
#    return render_to_response('web/poll.html',{'mypoll':mypoll})
#    return HttpResponse("OK! VP " + str(mypoll))

#def viewPollResults(request, poll_id):
#    mypoll = Poll.objects.get(pk=poll_id)
#    results = mypoll.choice_set.all()
#    return HttpResponse("OK! VPR " + str(mypoll) + " " +  str(results))
