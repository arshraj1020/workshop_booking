from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from workshop_portal import views
from django.conf import settings

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    # Home
    url(r'^$', views.index),

    # ✅ FIXED (namespace added)
    # support BOTH namespaces
url(r'^workshop/', include(('workshop_app.urls', 'workshop_app'), namespace='workshop')),

    # Django auth (password reset etc.)
    url(r'^reset/', include('django.contrib.auth.urls')),

    # Other apps
    url(r'^page/', include(('cms.urls', 'cms'), namespace='cms')),
    url(r'^statistics/', include(('statistics_app.urls', 'statistics_app'), namespace='statistics_app')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)