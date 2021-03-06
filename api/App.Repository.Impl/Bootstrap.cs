﻿using App.Common.DI;
using App.Repository.Impl.Registration;
using App.Repository.Registration;

namespace App.Repository.Impl
{
    public class Bootstrap : App.Common.Tasks.BaseTask<IBaseContainer>, IBootstrapper
    {
        public Bootstrap():base(App.Common.ApplicationType.All)
        {

        }
        public override void Execute(IBaseContainer context)
        {
            context.RegisterTransient<IUserRepository, UserRepository>();
            context.RegisterTransient<Repository.Common.ILanguageRepository, App.Repository.Impl.Common.LanguageRepository>();
            context.RegisterTransient<Repository.Security.IPermissionRepository, App.Repository.Impl.Security.PermissionRepository>();
            context.RegisterTransient<Repository.ContentManagement.ICategoryRepository, App.Repository.Impl.ContentManagement.CategoryRepository>();
        }
    }
}

