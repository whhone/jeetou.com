"""
Django production settings for the project.
"""

from .settings import *

import os


DEBUG = False

CORS_ALLOW_ALL_ORIGINS = False
CORS_ALLOWED_ORIGINS = [
    "https://jeetou.chunlaw.io",
    "http://localhost:8080",
    "http://127.0.0.1:8080"
]

WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': True,
        'BUNDLE_DIR_NAME': 'dist/',
        'STATS_FILE': os.path.join(PROJECT_ROOT, 'client', 'webpack-stats-prod.json'),
    }
}
