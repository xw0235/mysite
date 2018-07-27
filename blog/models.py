from django.db import models
from datetime import datetime

# 分类
class Category(models.Model):
    name = models.CharField(max_length=20)
    createAt = models.DateTimeField(default=datetime.now())
    updateAt = models.DateTimeField()

    def __str__(self):
        return self.name;

# 标签
class Tag(models.Model):
    name = models.CharField(max_length=20)
    createAt = models.DateTimeField(default=datetime.now())
    updateAt = models.DateTimeField()

    def __str__(self):
        return self.name;

# 文章模型
class Article(models.Model):
    title = models.CharField(max_length=30)
    author = models.CharField(max_length=20)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    tag = models.ManyToManyField(Tag)
    content = models.TextField()
    like = models.IntegerField(default=0)
    read = models.IntegerField(default=0)
    # comment =
    counting = models.IntegerField(default=0)
    collected = models.IntegerField(default=0)
    createAt = models.DateTimeField(default=datetime.now())
    updateAt = models.DateTimeField()

    def __str__(self):
        return self.title;