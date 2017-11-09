"""
Django production settings for the project.
"""

from .settings import *

import os


DEBUG = False

WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': True,
        'BUNDLE_DIR_NAME': 'dist/',
        'STATS_FILE': os.path.join(PROJECT_ROOT, 'client', 'webpack-stats-prod.json'),
    }
}
