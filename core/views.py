from django.shortcuts import render

def servicios(request):
    return render(request, 'core/servicios.html')

def logros(request):
    return render(request, 'core/logros.html')

def personal(request):
    return render(request, 'core/personal.html')