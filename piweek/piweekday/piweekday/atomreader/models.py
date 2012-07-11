from django.db import models

# Create your models here.

class GithubRepo(models.Model):
    githubuser = models.CharField(max_length=200)
    githubrepo = models.CharField(max_length=200)
    updatedentries = models.TextField(blank=True, null=True)

    def populate(self, feedparserEntries):

        tempList = []
        for entry in feedparserEntries:
            tempList.append({"title":entry.title,"updated":entry.updated,\
            "link":entry.link,"summary":entry.summary,"avatar":entry.media_thumbnail[0]["url"],\
            "author":entry.authors[0]["name"]})



        self.updatedentries = tempList

    def prettyStr(self):
        return "<pre>"+self.updatedentries[0]["title"]+"\n"+self.updatedentries[0]["summary"]+"</pre>"



    def __unicode__(self):
        return u"%s - %s"%(self.githubuser,self.githubrepo)
