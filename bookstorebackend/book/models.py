from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=300, null=False, blank=False)
    num_pages = models.IntegerField(default=0)
    image = models.ImageField(upload_to="static/bookimages")
    
    def __str__(self):
        return self.title
    

class Author(models.Model):
    author_name = models.CharField(max_length=100, null=False, blank=False)
    
    def __str__(self):
        return self.author_name
    

class Language(models.Model):
    langauge_name = models.CharField(max_length=100, null=False, blank=False)
    
    def __str__(self):
        return self.langauge_name
