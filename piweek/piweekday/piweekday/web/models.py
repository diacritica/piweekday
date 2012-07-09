from django.db import models

# Create your models here.

class Poll(models.Model):
    question = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    
    def __unicode__(self):
        return "Q?" + " " + self.question
    
class Choice(models.Model):
    poll = models.ForeignKey('Poll')
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField()
    
    def __unicode__(self):
        return "<" + " " + str(self.poll) + "> " + self.choice_text + " VOTES= " + str(self.votes)
    