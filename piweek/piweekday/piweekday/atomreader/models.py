from django.db import models

# Create your models here.

class GithubRepo(models.Model):
    githubuser = models.CharField(max_length=200)
    githubrepo = models.CharField(max_length=200)
    updatedentries = models.TextField(blank=True, null=True)

    def populate(self, feedparserEntries):

        self.updatedentries = [{"title":entry.title,"updated":entry.updated,\
            "link":entry.link,"summary":entry.summary,"avatar":entry.media_thumbnail[0]["url"],\
            "author":entry.authors[0]["name"]} for entry in feedparserEntries]


    def __unicode__(self):
        return u"%s - %s"%(self.githubuser,self.githubrepo)
