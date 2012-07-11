from django.db import models

#from django.utils.encoding import force_unicode
from django.utils.translation import ugettext_lazy as _

from piweekday.atomreader.models import GithubRepo

# Create your models here.

VIDEO_FORMAT_CHOICES = (
        ('MP4', _('Mp4')),
        ('WEBM', _('webM')),
        ('OGV', _('Ogv')),
)


class Project(models.Model):

    title = models.CharField(max_length=100, blank=False, null=False, verbose_name=_("Project's title"))

    slug = models.SlugField(blank=True,null=True,max_length=200,help_text="A short label, generally used in URLs. AUTOMATICALLY ADDED!")

    data1 = models.SmallIntegerField(blank=True, null=True,verbose_name=_('Data one'))
    data2 = models.SmallIntegerField(blank=True, null=True,verbose_name=_('Data two'))
    data3 = models.SmallIntegerField(blank=True, null=True,verbose_name=_('Data three'))
    data4 = models.SmallIntegerField(blank=True, null=True,verbose_name=_('Data four'))
    data5 = models.SmallIntegerField(blank=True, null=True,verbose_name=_('Data five'))

    description = models.TextField(blank=True, null=True, verbose_name=_('Description'))

    githubrepo = models.ForeignKey(GithubRepo,blank=True, null=True,related_name=_("Github repo"))

    thumbnail = models.ImageField(upload_to='img/', blank=True, null=True,  verbose_name=_("Project's image"))

    videos = models.ManyToManyField('VideoFile', blank=True, null=True,  related_name=_("Videos"))
    images = models.ManyToManyField('ImageFile', blank=True, null=True,  related_name=_("Images"))

    members = models.ManyToManyField('TeamMember', blank=True, null=True,  related_name=_("Members"))


    def __unicode__(self):
        return unicode(u"%s" % (self.title,))

    class Meta:
        db_table = u'project'
        verbose_name = _(u'Project')
        get_latest_by = 'order_name'
        ordering = ['-title']

    def save(self, *args, **kwargs):
        unique_slug(self, slug_source='title', slug_field='slug')

        super(Project, self).save(*args, **kwargs)

class TeamMember(models.Model):

    name = models.CharField(max_length=100, blank=False, null=False, verbose_name=_("Name"))
    nickname = models.CharField(max_length=100, blank=False, null=False, verbose_name=_("Nickname"))

    slug = models.SlugField(blank=True,null=True,max_length=200,help_text="A short label, generally used in URLs. AUTOMATICALLY ADDED!")

    description = models.TextField(blank=True, null=True, verbose_name=_('Description'))

    image = models.ImageField(upload_to='img/', blank=True, null=True,  verbose_name=_("Member's photo"))

    url = models.URLField(blank=True, null=True, verbose_name=_('Url'))

    def __unicode__(self):
        return unicode(u"%s" % (self.name,))

    class Meta:
        db_table = u'teammember'
        verbose_name = _(u'TeamMember')
        get_latest_by = 'order_name'
        ordering = ['-name']

    def save(self, *args, **kwargs):
        unique_slug(self, slug_source='name', slug_field='slug')

        super(TeamMember, self).save(*args, **kwargs)


class VideoFile(models.Model):
    name = models.CharField(max_length='100', blank=False, null=False, verbose_name=_('Filename'))
    description =  models.TextField(blank=True, null=True, verbose_name=_('Description'))
    content = models.FileField(upload_to='files/', blank=True, null=True,  verbose_name=_("Content"))

    #Generic to all objects

    slug = models.SlugField(blank=True,null=True,max_length=200,help_text="A short label, generally used in URLs. AUTOMATICALLY ADDED!")

    comments = models.TextField(blank=True, null=True, verbose_name=_('Comments'))
    videoformat = models.CharField(max_length=5, blank=True, null=True, choices=VIDEO_FORMAT_CHOICES, verbose_name=_('Video format choices'))
    date = models.DateField(verbose_name=_('Creation date'))

    def save(self, *args, **kwargs):
        unique_slug(self, slug_source='name', slug_field='slug')

        super(VideoFile, self).save(*args, **kwargs)


    def __unicode__(self):
        return unicode(u"%s" % (self.name,))

    class Meta:
        db_table = u'videofile'
        verbose_name = _(u'VideoFile')
        get_latest_by = 'order_name'
        ordering = ['-name']
        #unique_together = ('name', 'parent')


class ImageFile(models.Model):
    name = models.CharField(max_length='100', blank=False, null=False, verbose_name=_('Filename'))
    description =  models.TextField(blank=True, null=True, verbose_name=_('Description'))
    content = models.FileField(upload_to='img/', blank=True, null=True,  verbose_name=_("Content"))

    #Generic to all objects

    slug = models.SlugField(blank=True,null=True,max_length=200,help_text="A short label, generally used in URLs. AUTOMATICALLY ADDED!")

    comments = models.TextField(blank=True, null=True, verbose_name=_('Comments'))

    date = models.DateField(verbose_name=_('Creation date'))

    def save(self, *args, **kwargs):
        unique_slug(self, slug_source='name', slug_field='slug')

        super(ImageFile, self).save(*args, **kwargs)


    def __unicode__(self):
        return unicode(u"%s" % (self.name,))

    class Meta:
        db_table = u'imagefile'
        verbose_name = _(u'ImageFile')
        get_latest_by = 'order_name'
        ordering = ['-name']
        #unique_together = ('name', 'parent')



def unique_slug(item,slug_source,slug_field):
  """Ensures a unique slug field by appending an integer counter to duplicate slugs.

  The item's slug field is first prepopulated by slugify-ing the source field. If that value already exists, a counter is appended to the slug, and the counter incremented upward until the value is unique.

  For instance, if you save an object titled Daily Roundup, and the slug daily-roundup is already taken, this function will try daily-roundup-2, daily-roundup-3, daily-roundup-4, etc, until a unique value is found.

  Call from within a model's custom save() method like so:
  unique_slug(item, slug_source='field1', slug_field='field2')
  where the value of field slug_source will be used to prepopulate the value of slug_field.
  """
  if not getattr(item, slug_field): # if it's already got a slug, do nothing.
      from django.template.defaultfilters import slugify
      slug = slugify(getattr(item,slug_source))
      itemModel = item.__class__
      # the following gets all existing slug values
      allSlugs = [sl.values()[0] for sl in itemModel.objects.values(slug_field)]
      if slug in allSlugs:
          import re
          counterFinder = re.compile(r'-\d+$')
          counter = 2
          slug = "%s-%i" % (slug, counter)
          while slug in allSlugs:
              slug = re.sub(counterFinder,"-%i" % counter, slug)
              counter += 1
      setattr(item,slug_field,slug)

