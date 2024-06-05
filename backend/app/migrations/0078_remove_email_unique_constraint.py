# Generated by Django 4.0.10 on 2024-05-08 00:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0077_alter_user_options_user_username_alter_user_email_and_more'),
    ]

    # HACK: This migration removes the unique constraint on account_emailaddress.email. Surprisingly it worked.
    operations = [
        migrations.RunSQL(
            """
            DROP INDEX IF EXISTS unique_verified_email;
            """,
            ""
        ),
    ]