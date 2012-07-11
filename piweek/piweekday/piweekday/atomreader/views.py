# -*- coding: utf-8 -*-
# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response, get_object_or_404

from piweekday.settings import MEDIA_URL,STATIC_URL
from decimal import *

from piweekday.atomreader.models import *

import feedparser

from django.template import Context, Template, RequestContext


def GithubAtomFeedView(request, githubuser, githubrepo):

    fp = feedparser.parse('https://github.com/%s/%s/commits/master.atom'%(githubuser,githubrepo)).entries

    githubrepo = GithubRepo.objects.get(githubuser=githubuser,githubrepo=githubrepo)
    githubrepo.populate(fp)
    githubrepo.save()

    aCleanEntry = {}
    feed = []
    for entry in githubrepo.updatedentries:
        aCleanEntry["title"]=entry["title"]
        aCleanEntry["summary"]=entry["summary"]
        aCleanEntry["avatar"]=entry["avatar"]
        aCleanEntry["updated"]=entry["updated"]
        aCleanEntry["author"] = entry["author"]
        aCleanEntry["link"] = entry["link"]
        feed.append(aCleanEntry)
        aCleanEntry = {}

    return render_to_response("atomreader/feed.html",{"feed":feed})


def ARIndex(request):

    return HttpResponse("AtomReader OK")
