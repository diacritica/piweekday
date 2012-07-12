# Create your views here.

from django.shortcuts import render_to_response
from django.template import RequestContext

from piweekday.web.models import Project
from piweekday.atomreader.models import GithubRepo
from piweekday.atomreader.views import GithubAtomFeedView

def home(request):
    return render_to_response('web/home.html', context_instance=RequestContext(request))

def piweek(request):
    
    projectList = Project.objects.all()
    totalsum = [sum(getattr(proj,"data%i"%(i)) for proj in projectList) for i in range(1,6)]

    return render_to_response('web/piweek.html', {"totalsum":totalsum}, context_instance=RequestContext(request))

def projects(request):
    projectList = [p for p in Project.objects.all() if p.hasVideos()]
    return render_to_response('web/projects.html',  {"projectList":projectList}, context_instance=RequestContext(request) )

def projectView(request, project_slug):

    project = Project.objects.get(slug=project_slug)
    feed = GithubAtomFeedView(project.githubrepo)[:5]

    return render_to_response('web/projectView.html',  {'project':project, 'feed':feed}, context_instance=RequestContext(request))

def videoView(request):
    projectsVideoList = Project.objects.all()
    return render_to_response('web/videoView.html', {'projectsVideoList':projectsVideoList},context_instance=RequestContext(request) )

