from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core import serializers
import json

from .models import Category

# Create your views here.
def category(request):
    categories = Category.objects.get(name='前端开发')
    print(categories)
    # return JsonResponse({
    #     'items': json.dumps(list(categories)),
    #     'totalItems': len(categories)
    # })
    return HttpResponse(categories)