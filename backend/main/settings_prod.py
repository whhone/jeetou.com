"""
Django production settings for the project.
"""

from .settings import *

import os

DEBUG = False

CORS_ALLOW_ALL_ORIGINS = False
CORS_ALLOWED_ORIGINS = [
    "https://jeetou.com",
    "https://jeetou.chunlaw.io",
    "http://localhost:8080",
    "http://127.0.0.1:8080"
]
