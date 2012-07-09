# Create your views here.

from django.shortcuts import render_to_response
from piweekday.web.models import Poll, Choice
from django.http import HttpResponse
from piweekday.settings import STATIC_URL

def home(request):
    return render_to_response('web/base.html',  {'STATIC_URL': STATIC_URL})

#def viewPoll(request, poll_id):
#    mypoll = Poll.objects.get(pk=poll_id)
#    return render_to_response('web/poll.html',{'mypoll':mypoll})
#    return HttpResponse("OK! VP " + str(mypoll))

#def viewPollResults(request, poll_id):
#    mypoll = Poll.objects.get(pk=poll_id)
#    results = mypoll.choice_set.all()
#    return HttpResponse("OK! VPR " + str(mypoll) + " " +  str(results))