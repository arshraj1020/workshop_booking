from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from workshop_portal import views
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),

    # Home
    path('', views.index),

    # Workshop app
    path('workshop/', include(('workshop_app.urls', 'workshop_app'), namespace='workshop')),

    # Django auth (password reset etc.)
    path('reset/', include('django.contrib.auth.urls')),

    # Other apps
    path('page/', include(('cms.urls', 'cms'), namespace='cms')),
    path('statistics/', include(('statistics_app.urls', 'statistics_app'), namespace='statistics_app')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)