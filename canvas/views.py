from django.shortcuts import render

# Create your views here.


def canvas_view(request):
    context = {}
    return render(request, 'canvas/canvas_page.html', context)
