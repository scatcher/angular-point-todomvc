//Offline Data, only used when testing/building and it's used in the build version
angular.module('angularPoint').constant('apCachedXML', {
    "operations": {
        "WebUrlFromPageUrl": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"\n               xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n    <soap:Body>\n        <WebUrlFromPageUrlResponse xmlns=\"http://schemas.microsoft.com/sharepoint/soap/\">\n            <WebUrlFromPageUrlResult>http://sharepoint.company-server.com/mysite</WebUrlFromPageUrlResult>\n        </WebUrlFromPageUrlResponse>\n    </soap:Body>\n</soap:Envelope>"
    },
    "lists": {
        "Todo": {
            "GetListItemChangesSinceToken": "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><soap:Body><GetListItemChangesSinceTokenResponse xmlns=\"http://schemas.microsoft.com/sharepoint/soap/\"><GetListItemChangesSinceTokenResult><listitems xmlns:s=\"uuid:BDC6E3F0-6DA3-11d1-A2A3-00AA00C14882\" xmlns:dt=\"uuid:C2F41010-65B3-11d1-A29F-00AA00C14882\" xmlns:rs=\"urn:schemas-microsoft-com:rowset\" xmlns:z=\"#RowsetSchema\" MinTimeBetweenSyncs=\"0\" RecommendedTimeBetweenSyncs=\"180\" MaxBulkDocumentSyncSize=\"500\" AlternateUrls=\"http://io-srv2/,http://sharepoint.server.com/,https://sharepoint.server.com/\" EffectivePermMask=\"FullMask\">\n<Changes LastChangeToken=\"1;3;c2477c93-bf7d-4cce-8700-9399c90cd851;635784564047370000;879091\">\n<List DocTemplateUrl=\"\" DefaultViewUrl=\"/OneAppData/Lists/Todo/AllItems.aspx\" MobileDefaultViewUrl=\"\" ID=\"{C2477C93-BF7D-4CCE-8700-9399C90CD851}\" Title=\"Todo\" Description=\"Demo list, not for use in production.\" ImageUrl=\"/_layouts/images/itgen.png\" Name=\"{C2477C93-BF7D-4CCE-8700-9399C90CD851}\" BaseType=\"0\" FeatureId=\"{00BFEA71-DE22-43B2-A848-C05709900100}\" ServerTemplate=\"100\" Created=\"20150921 18:16:19\" Modified=\"20150921 18:20:05\" LastDeleted=\"20150921 18:16:19\" Version=\"3\" Direction=\"none\" ThumbnailSize=\"0\" WebImageWidth=\"0\" WebImageHeight=\"0\" Flags=\"545263616\" ItemCount=\"3\" AnonymousPermMask=\"0\" RootFolder=\"/OneAppData/Lists/Todo\" ReadSecurity=\"1\" WriteSecurity=\"1\" Author=\"338\" EventSinkAssembly=\"\" EventSinkClass=\"\" EventSinkData=\"\" EmailAlias=\"\" WebFullUrl=\"/OneAppData\" WebId=\"5f61f646-1cce-4e92-addc-1626ce9f11cf\" SendToLocation=\"\" ScopeId=\"4f66a976-ca18-459f-9d62-5f1432573f59\" MajorVersionLimit=\"0\" MajorWithMinorVersionsLimit=\"0\" WorkFlowId=\"00000000-0000-0000-0000-000000000000\" HasUniqueScopes=\"False\" NoThrottleListOperations=\"False\" HasRelatedLists=\"False\" AllowDeletion=\"True\" AllowMultiResponses=\"False\" EnableAttachments=\"True\" EnableModeration=\"False\" EnableVersioning=\"False\" HasExternalDataSource=\"False\" Hidden=\"False\" MultipleDataList=\"False\" Ordered=\"False\" ShowUser=\"True\" EnablePeopleSelector=\"False\" EnableResourceSelector=\"False\" EnableMinorVersion=\"False\" RequireCheckout=\"False\" ThrottleListOperations=\"False\" ExcludeFromOfflineClient=\"False\" EnableFolderCreation=\"False\" IrmEnabled=\"False\" IsApplicationList=\"False\" PreserveEmptyValues=\"False\" StrictTypeCoercion=\"False\" EnforceDataValidation=\"False\" MaxItemsPerThrottledOperation=\"10000\"><Fields><Field ID=\"{03e45e84-1992-4d42-9116-26f756012634}\" RowOrdinal=\"0\" Type=\"ContentTypeId\" Sealed=\"TRUE\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" DisplayName=\"Content Type ID\" Name=\"ContentTypeId\" DisplaceOnUpgrade=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"ContentTypeId\" ColName=\"tp_ContentTypeId\" FromBaseType=\"TRUE\"/><Field ID=\"{fa564e0f-0c70-4ab9-b863-0177e6ddd247}\" Type=\"Text\" Name=\"Title\" DisplayName=\"Title\" Required=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Title\" FromBaseType=\"TRUE\" ColName=\"nvarchar1\"/><Field ID=\"{34ad21eb-75bd-4544-8c73-0e08330291fe}\" ReadOnly=\"TRUE\" Type=\"Note\" Name=\"_ModerationComments\" DisplayName=\"Approver Comments\" Hidden=\"TRUE\" CanToggleHidden=\"TRUE\" Filterable=\"FALSE\" Sortable=\"FALSE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"_ModerationComments\" FromBaseType=\"TRUE\" ColName=\"ntext1\"/><Field ID=\"{39360f11-34cf-4356-9945-25c44e68dade}\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" Type=\"Text\" Name=\"File_x0020_Type\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"File Type\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"File_x0020_Type\" FromBaseType=\"TRUE\" ColName=\"nvarchar2\"/><Field Type=\"Boolean\" DisplayName=\"Completed\" Description=\"Is this completed.\" EnforceUniqueValues=\"FALSE\" Indexed=\"FALSE\" ID=\"{ff94e8b4-15be-4f16-996e-e64ca1ae8dea}\" SourceID=\"{c2477c93-bf7d-4cce-8700-9399c90cd851}\" StaticName=\"Completed\" Name=\"Completed\" ColName=\"bit1\" RowOrdinal=\"0\"><Default>0</Default></Field><Field ID=\"{1d22ea11-1e32-424e-89ab-9fedbadb6ce1}\" ColName=\"tp_ID\" RowOrdinal=\"0\" ReadOnly=\"TRUE\" Type=\"Counter\" Name=\"ID\" PrimaryKey=\"TRUE\" DisplayName=\"ID\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"ID\" FromBaseType=\"TRUE\"/><Field ID=\"{c042a256-787d-4a6f-8a8a-cf6ab767f12d}\" Type=\"Computed\" DisplayName=\"Content Type\" Name=\"ContentType\" DisplaceOnUpgrade=\"TRUE\" RenderXMLUsingPattern=\"TRUE\" Sortable=\"FALSE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"ContentType\" Group=\"_Hidden\" PITarget=\"MicrosoftWindowsSharePointServices\" PIAttribute=\"ContentTypeID\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"ContentTypeId\"/></FieldRefs><DisplayPattern><MapToContentType><Column Name=\"ContentTypeId\"/></MapToContentType></DisplayPattern></Field><Field ID=\"{28cf69c5-fa48-462a-b5cd-27b6f9d2bd5f}\" ColName=\"tp_Modified\" RowOrdinal=\"0\" ReadOnly=\"TRUE\" Type=\"DateTime\" Name=\"Modified\" DisplayName=\"Modified\" StorageTZ=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Modified\" FromBaseType=\"TRUE\"/><Field ID=\"{8c06beca-0777-48f7-91c7-6da68bc07b69}\" ColName=\"tp_Created\" RowOrdinal=\"0\" ReadOnly=\"TRUE\" Type=\"DateTime\" Name=\"Created\" DisplayName=\"Created\" StorageTZ=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Created\" FromBaseType=\"TRUE\"/><Field ID=\"{1df5e554-ec7e-46a6-901d-d85a3881cb18}\" ColName=\"tp_Author\" RowOrdinal=\"0\" ReadOnly=\"TRUE\" Type=\"User\" List=\"UserInfo\" Name=\"Author\" DisplayName=\"Created By\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Author\" FromBaseType=\"TRUE\"/><Field ID=\"{d31655d1-1d5b-4511-95a1-7a09e9b75bf2}\" ColName=\"tp_Editor\" RowOrdinal=\"0\" ReadOnly=\"TRUE\" Type=\"User\" List=\"UserInfo\" Name=\"Editor\" DisplayName=\"Modified By\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Editor\" FromBaseType=\"TRUE\"/><Field ID=\"{26d0756c-986a-48a7-af35-bf18ab85ff4a}\" ColName=\"tp_HasCopyDestinations\" RowOrdinal=\"0\" Sealed=\"TRUE\" Hidden=\"TRUE\" ReadOnly=\"TRUE\" Type=\"Boolean\" Name=\"_HasCopyDestinations\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"Has Copy Destinations\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"_HasCopyDestinations\" FromBaseType=\"TRUE\"/><Field ID=\"{6b4e226d-3d88-4a36-808d-a129bf52bccf}\" ColName=\"tp_CopySource\" RowOrdinal=\"0\" Sealed=\"TRUE\" Hidden=\"TRUE\" ReadOnly=\"TRUE\" Type=\"Text\" Name=\"_CopySource\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"Copy Source\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"_CopySource\" FromBaseType=\"TRUE\"/><Field ID=\"{d4e44a66-ee3a-4d02-88c9-4ec5ff3f4cd5}\" ColName=\"tp_Version\" RowOrdinal=\"0\" Hidden=\"TRUE\" ReadOnly=\"TRUE\" Type=\"Integer\" SetAs=\"owshiddenversion\" Name=\"owshiddenversion\" DisplayName=\"owshiddenversion\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"owshiddenversion\" FromBaseType=\"TRUE\"/><Field ID=\"{f1e020bc-ba26-443f-bf2f-b68715017bbc}\" ColName=\"tp_WorkflowVersion\" RowOrdinal=\"0\" Hidden=\"TRUE\" ReadOnly=\"TRUE\" Type=\"Integer\" Name=\"WorkflowVersion\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"Workflow Version\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"WorkflowVersion\" FromBaseType=\"TRUE\"/><Field ID=\"{7841bf41-43d0-4434-9f50-a673baef7631}\" ColName=\"tp_UIVersion\" RowOrdinal=\"0\" ReadOnly=\"TRUE\" Type=\"Integer\" Name=\"_UIVersion\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"UI Version\" Hidden=\"TRUE\" CanToggleHidden=\"TRUE\" Required=\"FALSE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"_UIVersion\" FromBaseType=\"TRUE\"/><Field ID=\"{dce8262a-3ae9-45aa-aab4-83bd75fb738a}\" ColName=\"tp_UIVersionString\" RowOrdinal=\"0\" ReadOnly=\"TRUE\" Type=\"Text\" Name=\"_UIVersionString\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"Version\" CanToggleHidden=\"TRUE\" Required=\"FALSE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"_UIVersionString\" FromBaseType=\"TRUE\"/><Field ID=\"{67df98f4-9dec-48ff-a553-29bece9c5bf4}\" ColName=\"tp_HasAttachment\" RowOrdinal=\"0\" Type=\"Attachments\" Name=\"Attachments\" DisplayName=\"Attachments\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Attachments\" FromBaseType=\"TRUE\"/><Field ID=\"{fdc3b2ed-5bf2-4835-a4bc-b885f3396a61}\" ColName=\"tp_ModerationStatus\" RowOrdinal=\"0\" ReadOnly=\"TRUE\" Type=\"ModStat\" Name=\"_ModerationStatus\" DisplayName=\"Approval Status\" Hidden=\"TRUE\" CanToggleHidden=\"TRUE\" Required=\"FALSE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"_ModerationStatus\" FromBaseType=\"TRUE\"><CHOICES><CHOICE>0;#Approved</CHOICE><CHOICE>1;#Rejected</CHOICE><CHOICE>2;#Pending</CHOICE><CHOICE>3;#Draft</CHOICE><CHOICE>4;#Scheduled</CHOICE></CHOICES><Default>0</Default></Field><Field ID=\"{503f1caa-358e-4918-9094-4a2cdc4bc034}\" ReadOnly=\"TRUE\" Type=\"Computed\" Name=\"Edit\" Sortable=\"FALSE\" Filterable=\"FALSE\" DisplayName=\"Edit\" ClassInfo=\"Icon\" AuthoringInfo=\"(link to edit item)\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Edit\" FromBaseType=\"TRUE\"><DisplayPattern><IfHasRights><RightsChoices><RightsGroup PermEditListItems=\"required\"/></RightsChoices><Then><HTML><![CDATA[<a href=\"]]></HTML><URL Cmd=\"Edit\"/><HTML><![CDATA[\" onclick=\"EditLink(this, ]]></HTML><Counter Type=\"View\"/><HTML><![CDATA[);return false;\" target=\"_self\">]]></HTML><HTML><![CDATA[<img border=\"0\" alt=\"]]></HTML><HTML>Edit</HTML><HTML><![CDATA[\" src=\"/_layouts/images/edititem.gif\"/>]]></HTML><HTML><![CDATA[</a>]]></HTML></Then><Else><HTML><![CDATA[&#160;]]></HTML></Else></IfHasRights></DisplayPattern></Field><Field ID=\"{bc91a437-52e7-49e1-8c4e-4698904b2b6d}\" ReadOnly=\"TRUE\" Type=\"Computed\" Name=\"LinkTitleNoMenu\" DisplayName=\"Title\" Dir=\"\" DisplayNameSrcField=\"Title\" AuthoringInfo=\"(linked to item)\" EnableLookup=\"TRUE\" ListItemMenuAllowed=\"Prohibited\" LinkToItemAllowed=\"Prohibited\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"LinkTitleNoMenu\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"Title\"/><FieldRef Name=\"LinkFilenameNoMenu\"/></FieldRefs><DisplayPattern><IfEqual><Expr1><LookupColumn Name=\"FSObjType\"/></Expr1><Expr2>1</Expr2><Then><Field Name=\"LinkFilenameNoMenu\"/></Then><Else><HTML><![CDATA[<a onfocus=\"OnLink(this)\" href=\"]]></HTML><URL/><HTML><![CDATA[\" onclick=\"EditLink2(this,]]></HTML><Counter Type=\"View\"/><HTML><![CDATA[);return false;\" target=\"_self\">]]></HTML><Column HTMLEncode=\"TRUE\" Name=\"Title\" Default=\"(no title)\"/><IfEqual><Expr1><GetVar Name=\"ShowAccessibleIcon\"/></Expr1><Expr2>1</Expr2><Then><HTML><![CDATA[<img src=\"/_layouts/images/blank.gif\" class=\"ms-hidden\" border=\"0\" width=\"1\" height=\"1\" alt=\"Use SHIFT+ENTER to open the menu (new window).\"/>]]></HTML></Then></IfEqual><HTML><![CDATA[</a>]]></HTML><IfNew><HTML><![CDATA[<img src=\"/_layouts/1033/images/new.gif\" alt=\"]]></HTML><HTML>New</HTML><HTML><![CDATA[\" class=\"ms-newgif\" />]]></HTML></IfNew></Else></IfEqual></DisplayPattern></Field><Field ID=\"{82642ec8-ef9b-478f-acf9-31f7d45fbc31}\" ReadOnly=\"TRUE\" Type=\"Computed\" Name=\"LinkTitle\" DisplayName=\"Title\" DisplayNameSrcField=\"Title\" ClassInfo=\"Menu\" AuthoringInfo=\"(linked to item with edit menu)\" ListItemMenuAllowed=\"Required\" LinkToItemAllowed=\"Prohibited\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"LinkTitle\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"Title\"/><FieldRef Name=\"LinkTitleNoMenu\"/><FieldRef Name=\"_EditMenuTableStart2\"/><FieldRef Name=\"_EditMenuTableEnd\"/></FieldRefs><DisplayPattern><FieldSwitch><Expr><GetVar Name=\"FreeForm\"/></Expr><Case Value=\"TRUE\"><Field Name=\"LinkTitleNoMenu\"/></Case><Default><Switch><Expr><GetVar Name=\"MasterVersion\"/></Expr><Case Value=\"4\"><HTML><![CDATA[<div class=\"ms-vb itx\" onmouseover=\"OnItem(this)\" CTXName=\"ctx]]></HTML><Field Name=\"_EditMenuTableStart2\"/><HTML><![CDATA[\">]]></HTML><Field Name=\"LinkTitleNoMenu\"/><HTML><![CDATA[</div>]]></HTML><HTML><![CDATA[<div class=\"s4-ctx\" onmouseover=\"OnChildItem(this.parentNode); return false;\">]]></HTML><HTML><![CDATA[<span>&nbsp;</span>]]></HTML><HTML><![CDATA[<a onfocus=\"OnChildItem(this.parentNode.parentNode); return false;\" onclick=\"PopMenuFromChevron(event); return false;\" href=\"javascript:;\" title=\"Open Menu\"></a>]]></HTML><HTML><![CDATA[<span>&nbsp;</span>]]></HTML><HTML><![CDATA[</div>]]></HTML></Case><Default><HTML><![CDATA[<table height=\"100%\" cellspacing=\"0\" class=\"ms-unselectedtitle itx\" onmouseover=\"OnItem(this)\" CTXName=\"ctx]]></HTML><Field Name=\"_EditMenuTableStart2\"/><HTML><![CDATA[\"><tr><td width=\"100%\" class=\"ms-vb\">]]></HTML><SetVar Name=\"ShowAccessibleIcon\" Value=\"1\"/><Field Name=\"LinkTitleNoMenu\"/><SetVar Name=\"ShowAccessibleIcon\" Value=\"0\"/><HTML><![CDATA[</td><td><img src=\"/_layouts/images/blank.gif\" width=\"13\" style=\"visibility:hidden\" alt=\"\"/></td></tr></table>]]></HTML></Default></Switch></Default></FieldSwitch></DisplayPattern></Field><Field ID=\"{5f190d91-3dbc-4489-9878-3c092caf35b6}\" Hidden=\"TRUE\" ReadOnly=\"TRUE\" Type=\"Computed\" Name=\"LinkTitle2\" DisplayName=\"Title\" DisplayNameSrcField=\"Title\" ClassInfo=\"Menu\" AuthoringInfo=\"(linked to item with edit menu) (old)\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"LinkTitle2\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"Title\"/><FieldRef Name=\"LinkTitleNoMenu\"/><FieldRef Name=\"_EditMenuTableStart\"/><FieldRef Name=\"_EditMenuTableEnd\"/></FieldRefs><DisplayPattern><FieldSwitch><Expr><GetVar Name=\"FreeForm\"/></Expr><Case Value=\"TRUE\"><Field Name=\"LinkTitleNoMenu\"/></Case><Default><Field Name=\"_EditMenuTableStart\"/><SetVar Name=\"ShowAccessibleIcon\" Value=\"1\"/><Field Name=\"LinkTitleNoMenu\"/><SetVar Name=\"ShowAccessibleIcon\" Value=\"0\"/><Field Name=\"_EditMenuTableEnd\"/></Default></FieldSwitch></DisplayPattern></Field><Field ID=\"{b1f7969b-ea65-42e1-8b54-b588292635f2}\" ReadOnly=\"TRUE\" Type=\"Computed\" Sortable=\"FALSE\" Filterable=\"FALSE\" Name=\"SelectTitle\" Hidden=\"TRUE\" CanToggleHidden=\"TRUE\" DisplayName=\"Select\" Dir=\"\" AuthoringInfo=\"(web part connection)\" HeaderImage=\"blank.gif\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"SelectTitle\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"ID\"/></FieldRefs><DisplayPattern><IfEqual><Expr1><GetVar Name=\"SelectedID\"/></Expr1><Expr2><Column Name=\"ID\"/></Expr2><Then><HTML><![CDATA[<img border=\"0\" align=\"absmiddle\" style=\"cursor: pointer\" src=\"/_layouts/images/rbsel.gif\" alt=\"]]></HTML><HTML>Selected</HTML><HTML><![CDATA[\"/>]]></HTML></Then><Else><HTML><![CDATA[<a href=\"javascript:SelectField(']]></HTML><GetVar Name=\"View\"/><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><Column Name=\"ID\"/></ScriptQuote><HTML><![CDATA[');return false;\" onclick=\"javascript:SelectField(']]></HTML><GetVar Name=\"View\"/><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><Column Name=\"ID\"/></ScriptQuote><HTML><![CDATA[');return false;\" target=\"_self\">]]></HTML><HTML><![CDATA[<img border=\"0\" align=\"absmiddle\" style=\"cursor: pointer\" src=\"/_layouts/images/rbunsel.gif\"  alt=\"]]></HTML><HTML>Normal</HTML><HTML><![CDATA[\"/>]]></HTML><HTML><![CDATA[</a>]]></HTML></Else></IfEqual></DisplayPattern></Field><Field ID=\"{50a54da4-1528-4e67-954a-e2d24f1e9efb}\" Name=\"InstanceID\" DisplayName=\"Instance ID\" ColName=\"tp_InstanceID\" RowOrdinal=\"0\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" Type=\"Integer\" Min=\"0\" Max=\"99991231\" Filterable=\"TRUE\" Sortable=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"InstanceID\" FromBaseType=\"TRUE\"/><Field ID=\"{ca4addac-796f-4b23-b093-d2a3f65c0774}\" ColName=\"tp_ItemOrder\" RowOrdinal=\"0\" Name=\"Order\" DisplayName=\"Order\" Type=\"Number\" Hidden=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Order\" FromBaseType=\"TRUE\"/><Field ID=\"{ae069f25-3ac2-4256-b9c3-15dbc15da0e0}\" ColName=\"tp_GUID\" RowOrdinal=\"0\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" Type=\"Guid\" Name=\"GUID\" DisplayName=\"GUID\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"GUID\" FromBaseType=\"TRUE\"/><Field ID=\"{de8beacf-5505-47cd-80a6-aa44e7ffe2f4}\" ColName=\"tp_WorkflowInstanceID\" RowOrdinal=\"0\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" Type=\"Guid\" Name=\"WorkflowInstanceID\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"Workflow Instance ID\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"WorkflowInstanceID\" FromBaseType=\"TRUE\"/><Field ID=\"{94f89715-e097-4e8b-ba79-ea02aa8b7adb}\" Name=\"FileRef\" DisplaceOnUpgrade=\"TRUE\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" Type=\"Lookup\" DisplayName=\"URL Path\" List=\"Docs\" FieldRef=\"ID\" ShowField=\"FullUrl\" JoinColName=\"DoclibRowId\" JoinRowOrdinal=\"0\" JoinType=\"INNER\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"FileRef\" FromBaseType=\"TRUE\"/><Field ID=\"{56605df6-8fa1-47e4-a04c-5b384d59609f}\" Name=\"FileDirRef\" DisplaceOnUpgrade=\"TRUE\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" Type=\"Lookup\" DisplayName=\"Path\" List=\"Docs\" FieldRef=\"ID\" ShowField=\"DirName\" JoinColName=\"DoclibRowId\" JoinRowOrdinal=\"0\" JoinType=\"INNER\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"FileDirRef\" FromBaseType=\"TRUE\"/><Field ID=\"{173f76c8-aebd-446a-9bc9-769a2bd2c18f}\" Name=\"Last_x0020_Modified\" DisplaceOnUpgrade=\"TRUE\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" DisplayName=\"Modified\" Type=\"Lookup\" List=\"Docs\" FieldRef=\"ID\" ShowField=\"TimeLastModified\" Format=\"TRUE\" JoinColName=\"DoclibRowId\" JoinRowOrdinal=\"0\" JoinType=\"INNER\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Last_x0020_Modified\" FromBaseType=\"TRUE\"/><Field ID=\"{998b5cff-4a35-47a7-92f3-3914aa6aa4a2}\" Name=\"Created_x0020_Date\" DisplaceOnUpgrade=\"TRUE\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" DisplayName=\"Created\" Type=\"Lookup\" List=\"Docs\" FieldRef=\"ID\" ShowField=\"TimeCreated\" Format=\"TRUE\" JoinColName=\"DoclibRowId\" JoinRowOrdinal=\"0\" JoinType=\"INNER\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Created_x0020_Date\" FromBaseType=\"TRUE\"/><Field ID=\"{30bb605f-5bae-48fe-b4e3-1f81d9772af9}\" Name=\"FSObjType\" DisplaceOnUpgrade=\"TRUE\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" ShowInFileDlg=\"FALSE\" Type=\"Lookup\" DisplayName=\"Item Type\" List=\"Docs\" FieldRef=\"ID\" ShowField=\"FSType\" JoinColName=\"DoclibRowId\" JoinRowOrdinal=\"0\" JoinType=\"INNER\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"FSObjType\" FromBaseType=\"TRUE\"/><Field ID=\"{423874f8-c300-4bfb-b7a1-42e2159e3b19}\" Name=\"SortBehavior\" DisplaceOnUpgrade=\"TRUE\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" ShowInFileDlg=\"FALSE\" Type=\"Lookup\" DisplayName=\"Sort Type\" List=\"Docs\" FieldRef=\"ID\" ShowField=\"SortBehavior\" JoinColName=\"DoclibRowId\" JoinRowOrdinal=\"0\" JoinType=\"INNER\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"SortBehavior\" FromBaseType=\"TRUE\"/><Field ID=\"{ba3c27ee-4791-4867-8821-ff99000bac98}\" Name=\"PermMask\" DisplaceOnUpgrade=\"TRUE\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" RenderXMLUsingPattern=\"TRUE\" ShowInFileDlg=\"FALSE\" Type=\"Computed\" DisplayName=\"Effective Permissions Mask\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"PermMask\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"ID\"/></FieldRefs><DisplayPattern><CurrentRights/></DisplayPattern></Field><Field ID=\"{8553196d-ec8d-4564-9861-3dbe931050c8}\" Hidden=\"TRUE\" ShowInFileDlg=\"FALSE\" ShowInVersionHistory=\"FALSE\" Type=\"File\" Name=\"FileLeafRef\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"Name\" AuthoringInfo=\"(for use in forms)\" List=\"Docs\" FieldRef=\"ID\" ShowField=\"LeafName\" JoinColName=\"DoclibRowId\" JoinRowOrdinal=\"0\" JoinType=\"INNER\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"FileLeafRef\" FromBaseType=\"TRUE\"/><Field ID=\"{4b7403de-8d94-43e8-9f0f-137a3e298126}\" Name=\"UniqueId\" DisplaceOnUpgrade=\"TRUE\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" ShowInFileDlg=\"FALSE\" Type=\"Lookup\" DisplayName=\"Unique Id\" List=\"Docs\" FieldRef=\"ID\" ShowField=\"UniqueId\" JoinColName=\"DoclibRowId\" JoinRowOrdinal=\"0\" JoinType=\"INNER\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"UniqueId\" FromBaseType=\"TRUE\"/><Field ID=\"{6d2c4fde-3605-428e-a236-ce5f3dc2b4d4}\" Name=\"SyncClientId\" DisplaceOnUpgrade=\"TRUE\" Hidden=\"TRUE\" ReadOnly=\"TRUE\" DisplayName=\"Client Id\" ShowInFileDlg=\"FALSE\" Type=\"Lookup\" List=\"Docs\" FieldRef=\"ID\" ShowField=\"SyncClientId\" JoinColName=\"DoclibRowId\" JoinRowOrdinal=\"0\" JoinType=\"INNER\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"SyncClientId\" FromBaseType=\"TRUE\"/><Field ID=\"{c5c4b81c-f1d9-4b43-a6a2-090df32ebb68}\" Name=\"ProgId\" DisplaceOnUpgrade=\"TRUE\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" ShowInFileDlg=\"FALSE\" Type=\"Lookup\" DisplayName=\"ProgId\" List=\"Docs\" FieldRef=\"ID\" ShowField=\"ProgId\" JoinColName=\"DoclibRowId\" JoinRowOrdinal=\"0\" JoinType=\"INNER\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"ProgId\" FromBaseType=\"TRUE\"/><Field ID=\"{dddd2420-b270-4735-93b5-92b713d0944d}\" Name=\"ScopeId\" DisplaceOnUpgrade=\"TRUE\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" ShowInFileDlg=\"FALSE\" Type=\"Lookup\" DisplayName=\"ScopeId\" List=\"Docs\" FieldRef=\"ID\" ShowField=\"ScopeId\" JoinColName=\"DoclibRowId\" JoinRowOrdinal=\"0\" JoinType=\"INNER\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"ScopeId\" FromBaseType=\"TRUE\"/><Field ReadOnly=\"TRUE\" ID=\"{4ef1b78f-fdba-48dc-b8ab-3fa06a0c9804}\" Hidden=\"TRUE\" Type=\"Computed\" Name=\"HTML_x0020_File_x0020_Type\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"HTML File Type\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"HTML_x0020_File_x0020_Type\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"File_x0020_Type\"/></FieldRefs><DisplayPattern/></Field><Field ID=\"{3c6303be-e21f-4366-80d7-d6d0a3b22c7a}\" Hidden=\"TRUE\" ReadOnly=\"TRUE\" Type=\"Computed\" Name=\"_EditMenuTableStart\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"Edit Menu Table Start\" ClassInfo=\"Menu\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"_EditMenuTableStart\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"FileLeafRef\"/><FieldRef Name=\"FileDirRef\"/><FieldRef Name=\"FSObjType\"/><FieldRef Name=\"ID\"/><FieldRef Name=\"ServerUrl\"/><FieldRef Name=\"HTML_x0020_File_x0020_Type\"/><FieldRef Name=\"File_x0020_Type\"/><FieldRef Name=\"PermMask\"/><FieldRef Name=\"_HasCopyDestinations\"/><FieldRef Name=\"_CopySource\"/><FieldRef Name=\"ContentType\"/><FieldRef Name=\"ContentTypeId\"/><FieldRef Name=\"_ModerationStatus\"/><FieldRef Name=\"_UIVersion\"/></FieldRefs><DisplayPattern><Switch><Expr><GetVar Name=\"MasterVersion\"/></Expr><Case Value=\"4\"><HTML><![CDATA[<div class=\"ms-vb\" onmouseover=\"OnItem(this)\" CTXName=\"ctx]]></HTML></Case><Default><HTML><![CDATA[<table height=\"100%\" cellspacing=\"0\" class=\"ms-unselectedtitle\" onmouseover=\"OnItem(this)\" CTXName=\"ctx]]></HTML></Default></Switch><Counter Type=\"View\"/><HTML>\" id=\"</HTML><Column Name=\"ID\" HTMLEncode=\"TRUE\"/><HTML>\" Url=\"</HTML><Field Name=\"ServerUrl\" URLEncodeAsURL=\"TRUE\"/><HTML>\" DRef=\"</HTML><Field Name=\"FileDirRef\"/><HTML>\" Perm=\"</HTML><Field Name=\"PermMask\"/><HTML>\" type=\"</HTML><Column Name=\"HTML_x0020_File_x0020_Type\"/><HTML>\" Ext=\"</HTML><Column Name=\"File_x0020_Type\"/><HTML>\" Icon=\"</HTML><MapToAll><Column Name=\"HTML_x0020_File_x0020_Type\"/><HTML>|</HTML><Column Name=\"File_x0020_Type\"/></MapToAll><HTML>\" OType=\"</HTML><LookupColumn Name=\"FSObjType\"/><HTML>\" COUId=\"</HTML><HTML>\" HCD=\"</HTML><Column Name=\"_HasCopyDestinations\"/><HTML>\" CSrc=\"</HTML><Column Name=\"_CopySource\" URLEncodeAsURL=\"TRUE\"/><HTML>\" MS=\"</HTML><Column Name=\"_ModerationStatus\"/><HTML><![CDATA[\" CType=\"]]></HTML><Column Name=\"ContentType\" HTMLEncode=\"TRUE\"/><HTML><![CDATA[\" CId=\"]]></HTML><Column Name=\"ContentTypeId\"/><HTML>\" UIS=\"</HTML><Column Name=\"_UIVersion\"/><GetVar Name=\"_EditMenuTableExtra\"/><HTML>\" SUrl=\"</HTML><Switch><Expr><GetVar Name=\"MasterVersion\"/></Expr><Case Value=\"4\"><HTML><![CDATA[\">]]></HTML></Case><Default><HTML><![CDATA[\"><tr><td width=\"100%\" class=\"ms-vb\">]]></HTML></Default></Switch></DisplayPattern></Field><Field ID=\"{1344423c-c7f9-4134-88e4-ad842e2d723c}\" Hidden=\"TRUE\" ReadOnly=\"TRUE\" Type=\"Computed\" Name=\"_EditMenuTableStart2\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"Edit Menu Table Start\" ClassInfo=\"Menu\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"_EditMenuTableStart2\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"ID\"/></FieldRefs><DisplayPattern><Counter Type=\"View\"/><HTML>\" id=\"</HTML><Column Name=\"ID\" HTMLEncode=\"TRUE\"/></DisplayPattern></Field><Field ID=\"{2ea78cef-1bf9-4019-960a-02c41636cb47}\" Hidden=\"TRUE\" ReadOnly=\"TRUE\" Type=\"Computed\" Name=\"_EditMenuTableEnd\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"Edit Menu Table End\" ClassInfo=\"Menu\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"_EditMenuTableEnd\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"ID\"/></FieldRefs><DisplayPattern><Switch><Expr><GetVar Name=\"MasterVersion\"/></Expr><Case Value=\"4\"><HTML><![CDATA[</div>]]></HTML><HTML><![CDATA[<div class=\"s4-ctx\" onmouseover=\"OnChildItem(this.parentNode); return false;\">]]></HTML><HTML><![CDATA[<span>&nbsp;</span>]]></HTML><HTML><![CDATA[<a onfocus=\"OnChildItem(this.parentNode.parentNode); return false;\" onclick=\"PopMenuFromChevron(event); return false;\" href=\"javascript:;\" title=\"Open Menu\"></a>]]></HTML><HTML><![CDATA[<span>&nbsp;</span>]]></HTML><HTML><![CDATA[</div>]]></HTML></Case><Default><HTML><![CDATA[</td><td><img src=\"/_layouts/images/blank.gif\" width=\"13\" style=\"visibility:hidden\" alt=\"\"/></td></tr></table>]]></HTML></Default></Switch></DisplayPattern></Field><Field ID=\"{9d30f126-ba48-446b-b8f9-83745f322ebe}\" ReadOnly=\"TRUE\" Type=\"Computed\" Name=\"LinkFilenameNoMenu\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"Name\" Hidden=\"TRUE\" DisplayNameSrcField=\"FileLeafRef\" Filterable=\"FALSE\" AuthoringInfo=\"(linked to document)\" ListItemMenuAllowed=\"Prohibited\" LinkToItemAllowed=\"Prohibited\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"LinkFilenameNoMenu\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"FileLeafRef\"/><FieldRef Name=\"FSObjType\"/><FieldRef Name=\"Created_x0020_Date\"/><FieldRef Name=\"FileRef\"/><FieldRef Name=\"File_x0020_Type\"/><FieldRef Name=\"HTML_x0020_File_x0020_Type\"/><FieldRef Name=\"ContentTypeId\"/><FieldRef Name=\"PermMask\"/></FieldRefs><DisplayPattern><IfEqual><Expr1><LookupColumn Name=\"FSObjType\"/></Expr1><Expr2>1</Expr2><Then><FieldSwitch><Expr><GetVar Name=\"RecursiveView\"/></Expr><Case Value=\"1\"><LookupColumn Name=\"FileLeafRef\" HTMLEncode=\"TRUE\"/></Case><Default><SetVar Name=\"UnencodedFilterLink\"><SetVar Name=\"RootFolder\"><HTML>/</HTML><LookupColumn Name=\"FileRef\"/></SetVar><SetVar Name=\"SkipHost\">1</SetVar><SetVar Name=\"FolderCTID\"><FieldSwitch><Expr><ListProperty Select=\"EnableContentTypes\"/></Expr><Case Value=\"1\"><Column Name=\"ContentTypeId\"/></Case></FieldSwitch></SetVar><FilterLink Default=\"\" Paged=\"FALSE\"/></SetVar><HTML><![CDATA[<a onfocus=\"OnLink(this)\" href=\"]]></HTML><GetVar Name=\"UnencodedFilterLink\" HTMLEncode=\"TRUE\"/><HTML><![CDATA[\" onmousedown=\"javascript:VerifyFolderHref(this,event, ']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><GetVar Name=\"UnencodedFilterLink\"/></ScriptQuote><HTML><![CDATA[',']]></HTML><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><ListProperty Select=\"DefaultItemOpen\"/></ScriptQuote><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><MapToControl><Column Name=\"HTML_x0020_File_x0020_Type\"/><HTML>|</HTML><Column Name=\"File_x0020_Type\"/></MapToControl></ScriptQuote><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><Column Name=\"HTML_x0020_File_x0020_Type\"/></ScriptQuote><HTML><![CDATA[',']]></HTML><HTML><![CDATA[')\"]]></HTML><HTML><![CDATA[\" onclick=\"return HandleFolder(this,event, ']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><GetVar Name=\"UnencodedFilterLink\"/></ScriptQuote><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><ServerProperty Select=\"HtmlTransform\"/></ScriptQuote><HTML><![CDATA[',']]></HTML><HTML><![CDATA[',']]></HTML><HTML><![CDATA[',']]></HTML><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><ListProperty Select=\"DefaultItemOpen\"/></ScriptQuote><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><MapToControl><Column Name=\"HTML_x0020_File_x0020_Type\"/><HTML>|</HTML><Column Name=\"File_x0020_Type\"/></MapToControl></ScriptQuote><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><Column Name=\"HTML_x0020_File_x0020_Type\"/></ScriptQuote><HTML><![CDATA[',']]></HTML><HTML><![CDATA[',']]></HTML><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><UserID AllowAnonymous=\"TRUE\"/></ScriptQuote><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><ListProperty Select=\"ForceCheckout\"/></ScriptQuote><HTML><![CDATA[',']]></HTML><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><Field Name=\"PermMask\"/></ScriptQuote><HTML><![CDATA[');\">]]></HTML><LookupColumn Name=\"FileLeafRef\" HTMLEncode=\"TRUE\"/><IfEqual><Expr1><GetVar Name=\"ShowAccessibleIcon\"/></Expr1><Expr2>1</Expr2><Then><HTML><![CDATA[<img src=\"/_layouts/images/blank.gif\" class=\"ms-hidden\" border=\"0\" width=\"1\" height=\"1\" alt=\"Use SHIFT+ENTER to open the menu (new window).\"/>]]></HTML></Then></IfEqual><HTML><![CDATA[</a>]]></HTML></Default></FieldSwitch></Then><Else><HTML><![CDATA[<a onfocus=\"OnLink(this)\" href=\"]]></HTML><Field Name=\"ServerUrl\" URLEncodeAsURL=\"TRUE\"/><HTML><![CDATA[\" onclick=\"return DispEx(this,event,']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><ServerProperty Select=\"HtmlTransform\"/></ScriptQuote><HTML><![CDATA[',']]></HTML><HTML><![CDATA[',']]></HTML><HTML><![CDATA[',']]></HTML><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><ListProperty Select=\"DefaultItemOpen\"/></ScriptQuote><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><MapToControl><Column Name=\"HTML_x0020_File_x0020_Type\"/><HTML>|</HTML><Column Name=\"File_x0020_Type\"/></MapToControl></ScriptQuote><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><Column Name=\"HTML_x0020_File_x0020_Type\"/></ScriptQuote><HTML><![CDATA[',']]></HTML><HTML><![CDATA[',']]></HTML><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><UserID AllowAnonymous=\"TRUE\"/></ScriptQuote><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><ListProperty Select=\"ForceCheckout\"/></ScriptQuote><HTML><![CDATA[',']]></HTML><HTML><![CDATA[',']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><Field Name=\"PermMask\"/></ScriptQuote><HTML><![CDATA[')\">]]></HTML><UrlBaseName HTMLEncode=\"TRUE\"><LookupColumn Name=\"FileLeafRef\"/></UrlBaseName><IfEqual><Expr1><GetVar Name=\"ShowAccessibleIcon\"/></Expr1><Expr2>1</Expr2><Then><HTML><![CDATA[<img src=\"/_layouts/images/blank.gif\" class=\"ms-hidden\" border=\"0\" width=\"1\" height=\"1\" alt=\"Use SHIFT+ENTER to open the menu (new window).\"/>]]></HTML></Then></IfEqual><HTML><![CDATA[</a>]]></HTML><IfNew Name=\"Created_x0020_Date\"><HTML><![CDATA[<img src=\"/_layouts/1033/images/new.gif\" alt=\"]]></HTML><HTML>New</HTML><HTML><![CDATA[\" class=\"ms-newgif\" />]]></HTML></IfNew></Else></IfEqual></DisplayPattern></Field><Field ID=\"{5cc6dc79-3710-4374-b433-61cb4a686c12}\" ReadOnly=\"TRUE\" Type=\"Computed\" Name=\"LinkFilename\" DisplaceOnUpgrade=\"TRUE\" Hidden=\"TRUE\" DisplayName=\"Name\" DisplayNameSrcField=\"FileLeafRef\" Filterable=\"FALSE\" ClassInfo=\"Menu\" AuthoringInfo=\"(linked to document with edit menu)\" ListItemMenuAllowed=\"Required\" LinkToItemAllowed=\"Prohibited\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"LinkFilename\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"LinkFilenameNoMenu\"/><FieldRef Name=\"_EditMenuTableStart2\"/><FieldRef Name=\"_EditMenuTableEnd\"/></FieldRefs><DisplayPattern><FieldSwitch><Expr><GetVar Name=\"FreeForm\"/></Expr><Case Value=\"TRUE\"><Field Name=\"LinkFilenameNoMenu\"/></Case><Default><Switch><Expr><GetVar Name=\"MasterVersion\"/></Expr><Case Value=\"4\"><HTML><![CDATA[<div class=\"ms-vb itx\" onmouseover=\"OnItem(this)\" CTXName=\"ctx]]></HTML><Field Name=\"_EditMenuTableStart2\"/><HTML><![CDATA[\">]]></HTML><Field Name=\"LinkFilenameNoMenu\"/><HTML><![CDATA[</div>]]></HTML><HTML><![CDATA[<div class=\"s4-ctx\" onmouseover=\"OnChildItem(this.parentNode); return false;\">]]></HTML><HTML><![CDATA[<span>&nbsp;</span>]]></HTML><HTML><![CDATA[<a onfocus=\"OnChildItem(this.parentNode.parentNode); return false;\" onclick=\"PopMenuFromChevron(event); return false;\" href=\"javascript:;\" title=\"Open Menu\"></a>]]></HTML><HTML><![CDATA[<span>&nbsp;</span>]]></HTML><HTML><![CDATA[</div>]]></HTML></Case><Default><HTML><![CDATA[<table height=\"100%\" cellspacing=\"0\" class=\"ms-unselectedtitle itx\" onmouseover=\"OnItem(this)\" CTXName=\"ctx]]></HTML><Field Name=\"_EditMenuTableStart2\"/><HTML><![CDATA[\"><tr><td width=\"100%\" class=\"ms-vb\">]]></HTML><SetVar Name=\"ShowAccessibleIcon\" Value=\"1\"/><Field Name=\"LinkFilenameNoMenu\"/><SetVar Name=\"ShowAccessibleIcon\" Value=\"0\"/><HTML><![CDATA[</td><td><img src=\"/_layouts/images/blank.gif\" width=\"13\" style=\"visibility:hidden\" alt=\"\"/></td></tr></table>]]></HTML></Default></Switch></Default></FieldSwitch></DisplayPattern></Field><Field ID=\"{224ba411-da77-4050-b0eb-62d422f13d3e}\" Hidden=\"TRUE\" ReadOnly=\"TRUE\" Type=\"Computed\" Name=\"LinkFilename2\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"Name\" DisplayNameSrcField=\"FileLeafRef\" Filterable=\"FALSE\" ClassInfo=\"Menu\" AuthoringInfo=\"(linked to document with edit menu) (old)\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"LinkFilename2\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"LinkFilenameNoMenu\"/><FieldRef Name=\"_EditMenuTableStart\"/><FieldRef Name=\"_EditMenuTableEnd\"/></FieldRefs><DisplayPattern><FieldSwitch><Expr><GetVar Name=\"FreeForm\"/></Expr><Case Value=\"TRUE\"><Field Name=\"LinkFilenameNoMenu\"/></Case><Default><Field Name=\"_EditMenuTableStart\"/><SetVar Name=\"ShowAccessibleIcon\" Value=\"1\"/><Field Name=\"LinkFilenameNoMenu\"/><SetVar Name=\"ShowAccessibleIcon\" Value=\"0\"/><Field Name=\"_EditMenuTableEnd\"/></Default></FieldSwitch></DisplayPattern></Field><Field ID=\"{081c6e4c-5c14-4f20-b23e-1a71ceb6a67c}\" Type=\"Computed\" ReadOnly=\"TRUE\" Name=\"DocIcon\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"Type\" TextOnly=\"TRUE\" ClassInfo=\"Icon\" AuthoringInfo=\"(icon linked to document)\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"DocIcon\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"File_x0020_Type\"/><FieldRef Name=\"FSObjType\"/><FieldRef Name=\"FileRef\"/><FieldRef Name=\"FileLeafRef\"/><FieldRef Name=\"HTML_x0020_File_x0020_Type\"/><FieldRef Name=\"PermMask\"/><FieldRef Name=\"IconOverlay\"/></FieldRefs><DisplayPattern><SetVar Name=\"DocIconImg\"><SetVar Name=\"DocIconAltText\"><IfEqual><Expr1><LookupColumn Name=\"FSObjType\"/></Expr1><Expr2>1</Expr2><Then><IfSubString><Expr1>0x0120D5</Expr1><Expr2><Column Name=\"ContentTypeId\"/></Expr2><Then><HTML>Document Collection: </HTML><LookupColumn Name=\"FileLeafRef\" HTMLEncode=\"TRUE\"/></Then><Else><HTML>Folder: </HTML><LookupColumn Name=\"FileLeafRef\" HTMLEncode=\"TRUE\"/></Else></IfSubString></Then><Else><LookupColumn Name=\"Title\" HTMLEncode=\"TRUE\"/></Else></IfEqual></SetVar><SetVar Name=\"DocIconFileName\"><IfEqual><Expr1><Column Name=\"IconOverlay\"/></Expr1><Expr2/><Then><IfEqual><Expr1><LookupColumn Name=\"FSObjType\"/></Expr1><Expr2>1</Expr2><Then><IfEqual><Expr1><Column Name=\"HTML_x0020_File_x0020_Type\"/><HTML>|</HTML><Column Name=\"File_x0020_Type\"/></Expr1><Expr2><HTML>|</HTML></Expr2><Then><HTML>folder.gif</HTML></Then><Else><SetVar Name=\"FolderIconFromMap\"><MapToIcon><Column Name=\"HTML_x0020_File_x0020_Type\"/><HTML>|</HTML><Column Name=\"File_x0020_Type\"/></MapToIcon></SetVar><IfEqual><Expr1><GetVar Name=\"FolderIconFromMap\"/></Expr1><Expr2><MapToIcon/></Expr2><Then><HTML>folder.gif</HTML></Then><Else><GetVar Name=\"FolderIconFromMap\"/></Else></IfEqual></Else></IfEqual></Then><Else><MapToIcon><Column Name=\"HTML_x0020_File_x0020_Type\"/><HTML>|</HTML><Column Name=\"File_x0020_Type\"/></MapToIcon></Else></IfEqual></Then><Else><MapToIcon><Column Name=\"IconOverlay\"/></MapToIcon></Else></IfEqual></SetVar><HTML><![CDATA[<img border=\"0\" alt=\"]]></HTML><GetVar Name=\"DocIconAltText\"/><HTML><![CDATA[\" title=\"]]></HTML><GetVar Name=\"DocIconAltText\"/><HTML><![CDATA[\" src=\"/_layouts/images/]]></HTML><GetVar Name=\"DocIconFileName\"/><HTML><![CDATA[\" />]]></HTML></SetVar><SetVar Name=\"DocIconOverlayImg\"><IfEqual><Expr1><Column Name=\"IconOverlay\"/></Expr1><Expr2/><Then/><Else><HTML><![CDATA[<img class=\"ms-vb-icon-overlay\" alt=\"*\" src=\"/_layouts/images/]]></HTML><MapToOverlay><Column Name=\"IconOverlay\"/></MapToOverlay><HTML><![CDATA[\" />]]></HTML></Else></IfEqual></SetVar><IfEqual><Expr1><LookupColumn Name=\"FSObjType\"/></Expr1><Expr2>1</Expr2><Then><FieldSwitch><Expr><GetVar Name=\"RecursiveView\"/></Expr><Case Value=\"1\"><GetVar Name=\"DocIconImg\"/><GetVar Name=\"DocIconOverlayImg\"/></Case><Default><SetVar Name=\"UnencodedFilterLink\"><SetVar Name=\"RootFolder\"><HTML>/</HTML><LookupColumn Name=\"FileRef\"/></SetVar><SetVar Name=\"SkipHost\">1</SetVar><SetVar Name=\"FolderCTID\"><FieldSwitch><Expr><ListProperty Select=\"EnableContentTypes\"/></Expr><Case Value=\"1\"><Column Name=\"ContentTypeId\"/></Case></FieldSwitch></SetVar><FilterLink Default=\"\" Paged=\"FALSE\"/></SetVar><FieldSwitch><Expr><GetVar Name=\"FileDialog\"/></Expr><Case Value=\"1\"><GetVar Name=\"DocIconImg\"/><GetVar Name=\"DocIconOverlayImg\"/></Case><Default><HTML><![CDATA[<a href=\"]]></HTML><GetVar Name=\"UnencodedFilterLink\" HTMLEncode=\"TRUE\"/><HTML><![CDATA[\" onclick=\"javascript:EnterFolder(']]></HTML><ScriptQuote NotAddingQuote=\"TRUE\"><GetVar Name=\"UnencodedFilterLink\"/></ScriptQuote><HTML><![CDATA[');javascript:return false;\">]]></HTML><GetVar Name=\"DocIconImg\"/><GetVar Name=\"DocIconOverlayImg\"/><HTML><![CDATA[</a>]]></HTML></Default></FieldSwitch></Default></FieldSwitch></Then><Else><HTML><![CDATA[<a onfocus=\"OnLink(this)\" href=\"]]></HTML><URL/><HTML><![CDATA[\" onclick=\"GoToLink(this);return false;\" target=\"_self\">]]></HTML><GetVar Name=\"DocIconImg\"/><GetVar Name=\"DocIconOverlayImg\"/><HTML><![CDATA[</a>]]></HTML></Else></IfEqual></DisplayPattern></Field><Field ID=\"{105f76ce-724a-4bba-aece-f81f2fce58f5}\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" Type=\"Computed\" Name=\"ServerUrl\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"Server Relative URL\" Filterable=\"FALSE\" RenderXMLUsingPattern=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"ServerUrl\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"FileRef\"/></FieldRefs><DisplayPattern><HTML>/</HTML><LookupColumn Name=\"FileRef\"/></DisplayPattern></Field><Field ID=\"{7177cfc7-f399-4d4d-905d-37dd51bc90bf}\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" Type=\"Computed\" Name=\"EncodedAbsUrl\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"Encoded Absolute URL\" Filterable=\"FALSE\" RenderXMLUsingPattern=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"EncodedAbsUrl\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"FileRef\"/></FieldRefs><DisplayPattern><HttpHost URLEncodeAsURL=\"TRUE\"/><HTML>/</HTML><LookupColumn Name=\"FileRef\" IncludeVersions=\"TRUE\" URLEncodeAsURL=\"TRUE\"/></DisplayPattern></Field><Field ID=\"{7615464b-559e-4302-b8e2-8f440b913101}\" ReadOnly=\"TRUE\" Hidden=\"TRUE\" Type=\"Computed\" Name=\"BaseName\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"File Name\" Filterable=\"FALSE\" RenderXMLUsingPattern=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"BaseName\" FromBaseType=\"TRUE\"><FieldRefs><FieldRef Name=\"FileLeafRef\"/><FieldRef Name=\"FSObjType\"/></FieldRefs><DisplayPattern><IfEqual><Expr1><LookupColumn Name=\"FSObjType\"/></Expr1><Expr2>1</Expr2><Then><LookupColumn Name=\"FileLeafRef\" HTMLEncode=\"TRUE\"/></Then><Else><UrlBaseName HTMLEncode=\"TRUE\"><LookupColumn Name=\"FileLeafRef\"/></UrlBaseName></Else></IfEqual></DisplayPattern></Field><Field ID=\"{687c7f94-686a-42d3-9b67-2782eac4b4f8}\" Name=\"MetaInfo\" DisplaceOnUpgrade=\"TRUE\" Hidden=\"TRUE\" ShowInFileDlg=\"FALSE\" Type=\"Lookup\" DisplayName=\"Property Bag\" List=\"Docs\" FieldRef=\"ID\" ShowField=\"MetaInfo\" JoinColName=\"DoclibRowId\" JoinType=\"INNER\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"MetaInfo\" FromBaseType=\"TRUE\"/><Field ID=\"{43bdd51b-3c5b-4e78-90a8-fb2087f71e70}\" ColName=\"tp_Level\" RowOrdinal=\"0\" ReadOnly=\"TRUE\" Type=\"Integer\" Name=\"_Level\" DisplaceOnUpgrade=\"TRUE\" DisplayName=\"Level\" Hidden=\"TRUE\" Required=\"FALSE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"_Level\" FromBaseType=\"TRUE\"/><Field ID=\"{c101c3e7-122d-4d4d-bc34-58e94a38c816}\" ColName=\"tp_IsCurrentVersion\" DisplaceOnUpgrade=\"TRUE\" RowOrdinal=\"0\" ReadOnly=\"TRUE\" Type=\"Boolean\" Name=\"_IsCurrentVersion\" DisplayName=\"Is Current Version\" Hidden=\"TRUE\" Required=\"FALSE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"_IsCurrentVersion\" FromBaseType=\"TRUE\"/><Field ID=\"{b824e17e-a1b3-426e-aecf-f0184d900485}\" Name=\"ItemChildCount\" DisplaceOnUpgrade=\"TRUE\" ReadOnly=\"TRUE\" ShowInFileDlg=\"FALSE\" Type=\"Lookup\" DisplayName=\"Item Child Count\" List=\"Docs\" FieldRef=\"ID\" ShowField=\"ItemChildCount\" JoinColName=\"DoclibRowId\" JoinRowOrdinal=\"0\" JoinType=\"INNER\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"ItemChildCount\" FromBaseType=\"TRUE\"/><Field ID=\"{960ff01f-2b6d-4f1b-9c3f-e19ad8927341}\" Name=\"FolderChildCount\" DisplaceOnUpgrade=\"TRUE\" ReadOnly=\"TRUE\" ShowInFileDlg=\"FALSE\" Type=\"Lookup\" DisplayName=\"Folder Child Count\" List=\"Docs\" FieldRef=\"ID\" ShowField=\"FolderChildCount\" JoinColName=\"DoclibRowId\" JoinRowOrdinal=\"0\" JoinType=\"INNER\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"FolderChildCount\" FromBaseType=\"TRUE\"/></Fields><RegionalSettings><Language>1033</Language><Locale>1033</Locale><AdvanceHijri>0</AdvanceHijri><CalendarType>1</CalendarType><Time24>False</Time24><TimeZone>300</TimeZone><SortOrder>2070</SortOrder><Presence>True</Presence></RegionalSettings><ServerSettings><ServerVersion>14.0.7149.5000</ServerVersion><RecycleBinEnabled>True</RecycleBinEnabled><ServerRelativeUrl>/OneAppData</ServerRelativeUrl></ServerSettings></List></Changes>\n<rs:data ItemCount=\"3\">\n   <z:row ows_Attachments=\"0\" ows_LinkTitle=\"Buid simple demo\" ows_Completed=\"0\" ows_MetaInfo=\"1;#\" ows__ModerationStatus=\"0\" ows__Level=\"1\" ows_ID=\"1\" ows_UniqueId=\"1;#{4151D843-51ED-4413-A4EE-413537736631}\" ows_owshiddenversion=\"1\" ows_FSObjType=\"1;#0\" ows_Created_x0020_Date=\"1;#2015-09-21 14:19:33\" ows_Created=\"2015-09-21 14:19:33\" ows_Title=\"Buid simple demo\" ows_FileLeafRef=\"1;#1_.000\" ows_PermMask=\"0x7fffffffffffffff\" ows_Modified=\"2015-09-21 14:19:33\" ows_FileRef=\"1;#OneAppData/Lists/Todo/1_.000\"/>\n   <z:row ows_Attachments=\"0\" ows_LinkTitle=\"Get demo working...\" ows_Completed=\"0\" ows_MetaInfo=\"2;#\" ows__ModerationStatus=\"0\" ows__Level=\"1\" ows_ID=\"2\" ows_UniqueId=\"2;#{2CDE887E-1183-4DCE-BCDF-7136BFF698AD}\" ows_owshiddenversion=\"1\" ows_FSObjType=\"2;#0\" ows_Created_x0020_Date=\"2;#2015-09-21 14:19:42\" ows_Created=\"2015-09-21 14:19:42\" ows_Title=\"Get demo working...\" ows_FileLeafRef=\"2;#2_.000\" ows_PermMask=\"0x7fffffffffffffff\" ows_Modified=\"2015-09-21 14:19:42\" ows_FileRef=\"2;#OneAppData/Lists/Todo/2_.000\"/>\n   <z:row ows_Attachments=\"0\" ows_LinkTitle=\"Mark a todo as complete.\" ows_Completed=\"1\" ows_MetaInfo=\"3;#\" ows__ModerationStatus=\"0\" ows__Level=\"1\" ows_ID=\"3\" ows_UniqueId=\"3;#{BFD700D7-11F7-4E1B-B204-BEF08FF2DB82}\" ows_owshiddenversion=\"1\" ows_FSObjType=\"3;#0\" ows_Created_x0020_Date=\"3;#2015-09-21 14:20:05\" ows_Created=\"2015-09-21 14:20:05\" ows_Title=\"Mark a todo as complete.\" ows_FileLeafRef=\"3;#3_.000\" ows_PermMask=\"0x7fffffffffffffff\" ows_Modified=\"2015-09-21 14:20:05\" ows_FileRef=\"3;#OneAppData/Lists/Todo/3_.000\"/>\n</rs:data>\n</listitems></GetListItemChangesSinceTokenResult></GetListItemChangesSinceTokenResponse></soap:Body></soap:Envelope>"
        }
    }
});
//# sourceMappingURL=apCachedXML.js.map
/// <reference path="../../typings/ap.d.ts" />
/// <reference path="../../typings/tsd.d.ts" />
var ap;
(function (ap) {
    'use strict';
    var ModelChangeQueue = (function () {
        function ModelChangeQueue(token) {
            this.token = token;
            this.pendingDeletions = [];
            this.pendingUpdates = [];
        }
        ModelChangeQueue.prototype.clear = function (updatedToken) {
            this.token = updatedToken || '';
            this.pendingDeletions = [];
            this.pendingUpdates = [];
        };
        return ModelChangeQueue;
    })();
    var activeEntities = {}, //{ listItem.id: ListItem, ...}
    changeQueue = {}, mockId = 10000, xmlNS = {
        listItems: "xmlns:s=\"uuid:BDC6E3F0-6DA3-11d1-A2A3-00AA00C14882\" xmlns:dt=\"uuid:C2F41010-65B3-11d1-A29F-00AA00C14882\" xmlns:rs=\"urn:schemas-microsoft-com:rowset\" xmlns:z=\"#RowsetSchema\"",
        soap: "xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\""
    };
    function getMockId() {
        return mockId++;
    }
    var MockBackend = (function () {
        function MockBackend($httpBackend, apCachedXML, apCacheService, apWebServiceService, apUtilityService, $injector, apEncodeService, apChangeService, apXMLToJSONService) {
            /** Listen for each of the standard services being called and try to return a cached XML response for the
             * operation */
            _.each(apWebServiceService.webServices, function (service) {
                /** Lists has many special cases so don't create generic backend for it */
                if (service !== 'Lists') {
                    $httpBackend.whenPOST(function routeMatcher(url) {
                        return url.indexOf('bin/' + service + '.asmx') > -1;
                    })
                        .respond(function (method, url, data) {
                        var requestXML = $.parseXML(data);
                        /** Get the xml namespace for the current service */
                        var soapAction = apWebServiceService.xmlns(service);
                        var request = $(requestXML).find('[xmlns^="' + soapAction + '"]');
                        var operation = request[0].nodeName;
                        var responseXML = apCachedXML.operations[operation];
                        return responder(responseXML);
                    });
                }
            });
            $httpBackend.whenPOST(/Lists.asmx/)
                .respond(function (method, url, data) {
                var requestXML = $.parseXML(data);
                var request = $(requestXML).find('[xmlns^="http://schemas.microsoft.com/sharepoint/"]');
                var operation = request[0].nodeName;
                var responseXML;
                switch (operation) {
                    case 'GetListItems':
                        responseXML = getListItems(request);
                        break;
                    case 'GetList':
                    case 'GetListItemChangesSinceToken':
                        responseXML = getListItemChangesSinceToken(data, request);
                        break;
                    case 'UpdateListItems':
                        responseXML = updateListItem(request);
                        break;
                    default:
                        responseXML = apCachedXML.operations[operation];
                }
                return responder(responseXML);
            });
            apChangeService.subscribeToUpdates(function ChangeCallback(entity, options, promise) {
                activeEntities[entity.id] = entity;
            });
            /////////////////////////// PRIVATE ////////////////////////////////
            function getListItems(request) {
                var zrows = [];
                var rowLimit = $(request).find('rowLimit').text();
                if (rowLimit === "1") {
                    var zrow = getListItemById(request);
                    if (!zrow) {
                        /** A match wasn't found so return a mock */
                        zrow = generateMockListItems(request, 1)[0];
                    }
                    zrows.push(zrow);
                }
                else {
                    zrows = getZRows(request);
                }
                var responseEnvelope = listsResponseEnvelope('GetListItems');
                var payload = '<listitems ' + xmlNS.listItems + '>' + buildRSDataNode(zrows) + '</listitems>';
                return responseEnvelope.header + payload + responseEnvelope.footer;
            }
            /**
             * @ngdoc function
             * @name getListItemById
             * @description
             * Attempts to retrieve an xml zrow from cached xml.
             * @param {xml} request XML Request.
             * @returns {xml} zrow
             */
            function getListItemById(request) {
                var match;
                /** Retrieve the list item id */
                var id = $(request).find('Query').find('Value[Type="Number"]').text();
                var rows = getZRows(request);
                /** Attempt to find the requested list item in the cached xml */
                _.each(rows, function (row) {
                    if ($(row).attr('ows_ID') == id) {
                        match = row;
                        /** Break loop */
                        return false;
                    }
                });
                /** Returns a single entity */
                return match;
            }
            function getZRows(request) {
                var responseXML = getNamedListItems('GetListItems', request);
                var parsedXML = $.parseXML(responseXML);
                return apXMLToJSONService.filterNodes(parsedXML, 'z:row');
            }
            function convertUpdateRequestToResponse(request, optionalAttributes) {
                var fields = $(request).find('Field');
                var changeObject = {};
                _.each(fields, function (field) {
                    var fieldName = $(field).attr('Name');
                    var fieldValue = $(field).text();
                    changeObject[fieldName] = _.unescape(fieldValue);
                });
                _.extend(changeObject, optionalAttributes);
                return createZRow(changeObject);
            }
            function createZRow(changeObject) {
                var zrow = '<z:row ';
                _.each(changeObject, function (fieldValue, fieldName) {
                    zrow += ' ows_' + fieldName + '="' + _.escape(fieldValue) + '"';
                });
                zrow += ' xmlns:z="#RowsetSchema"/>';
                return zrow;
            }
            function getMockUser() {
                var mockUser = { lookupId: 100, lookupValue: 'Joe User' };
                try {
                    mockUser = $injector.get('mockUser');
                }
                catch (err) {
                }
                return mockUser;
            }
            function updateListItem(request) {
                var zrow, overrides, updateMethod = request.find('Method'), cmd = updateMethod.attr('Cmd');
                switch (cmd) {
                    /** Create list item */
                    case 'New':
                        var model = getListModel(request);
                        /** Need to create an id so find set it 1 higher than the id of the most recent entity */
                        var lastEntity = model.getCachedEntities().last();
                        var mockId = lastEntity ? lastEntity.id + 1 : getMockId();
                        //Mock Fields that would be set upon list item creation
                        overrides = {
                            ID: mockId,
                            Modified: apEncodeService.encodeValue('DateTime', new Date()),
                            Created: apEncodeService.encodeValue('DateTime', new Date()),
                            Author: apEncodeService.encodeValue('User', getMockUser()),
                            Editor: apEncodeService.encodeValue('User', getMockUser()),
                            PermMask: '0x7fffffffffffffff',
                            UniqueId: mockId + ';#{11FF840D-9CE1-4961-B7FD-51B9DF07706B}',
                            FileRef: mockId + ';#sitecollection/site/ListName/' + mockId + '_.000'
                        };
                        zrow = convertUpdateRequestToResponse(request, overrides);
                        registerUpdate(request, zrow);
                        break;
                    case 'Update':
                        var listItemStrId = $(request).find('Field[Name="ID"]').text();
                        //Retrieve the JS Object that is attempting to update
                        var activeEntity = activeEntities[listItemStrId];
                        //Mock fields that would be updated when a list item is update
                        overrides = {
                            Modified: apEncodeService.encodeValue('DateTime', new Date()),
                            Editor: apEncodeService.encodeValue('User', getMockUser()),
                            Version: activeEntity.version ? activeEntity.version + 1 : 2
                        };
                        var fieldDefinitions = activeEntity.getList().fields;
                        var valuePairs = apEncodeService.generateValuePairs(fieldDefinitions, activeEntity);
                        var encodedValues = {};
                        _.each(valuePairs, function (pair) {
                            encodedValues[pair[0]] = pair[1];
                        });
                        var opts = _.extend({}, encodedValues, overrides);
                        zrow = convertUpdateRequestToResponse(request, opts);
                        registerUpdate(request, zrow);
                        //Cleanup
                        delete activeEntities[listItemStrId];
                        break;
                    case 'Delete':
                        /** No z:row element when deleted */
                        zrow = '';
                        _.each($(request).find('Field'), function (field) {
                            var fieldId = parseInt($(field).text(), 10);
                            registerDeletion(request, fieldId);
                        });
                        break;
                }
                var responseEnvelope = listsResponseEnvelope('UpdateListItems');
                var payload = "<Results><Result ID=\"1," + cmd + "\"><ErrorCode>0x00000000</ErrorCode>" + zrow + "</Result></Results>";
                var xmlResponse = responseEnvelope.header + payload + responseEnvelope.footer;
                return xmlResponse;
            }
            function getListItemChangesSinceToken(data, request) {
                var responseXML, responseEnvelope, changeNodes, payload;
                var changeToken = getChangeToken(request);
                var newChangeToken = generateChangeToken(request);
                if (changeToken) {
                    /** Follow on request */
                    responseEnvelope = listsResponseEnvelope('GetListItemChangesSinceToken');
                    changeNodes = getChangesSinceToken(request, newChangeToken);
                    payload = "<listitems " + xmlNS.listItems + "> " + changeNodes.changes + " " + changeNodes.rsdata + "</listitems>";
                    responseXML = responseEnvelope.header + payload + responseEnvelope.footer;
                }
                else {
                    var model = getListModel(request);
                    registerChangeToken(request, newChangeToken);
                    /** Initial request so register this token */
                    if (apCachedXML.lists[model.list.title] && apCachedXML.lists[model.list.title].GetListItemChangesSinceToken) {
                        /** Use Cached XML */
                        responseXML = apCachedXML.lists[model.list.title].GetListItemChangesSinceToken;
                    }
                    else {
                        /** Generate mocks if no cached XML is found */
                        responseEnvelope = listsResponseEnvelope('GetListItemChangesSinceToken');
                        /** Add mocked items to change queue */
                        changeQueue[model.list.guid].pendingUpdates = generateMockListItems(request, 10);
                        changeNodes = getChangesSinceToken(request, newChangeToken);
                        payload = "<listitems " + xmlNS.listItems + ">" + changeNodes.changes + " " + changeNodes.rsdata + "</listitems>";
                        responseXML = responseEnvelope.header + payload + responseEnvelope.footer;
                    }
                }
                return responseXML;
            }
            function buildRSDataNode(zrows) {
                var rsdata = '<rs:data ItemCount="' + zrows.length + '">';
                _.each(zrows, function (zrow) {
                    /** Work with zrows that have been parsed to xml as well as those that are still strings */
                    rsdata += typeof zrow === 'object' ? apUtilityService.stringifyXML(zrow) : zrow;
                });
                rsdata += '</rs:data>';
                return rsdata;
            }
            function getChangesSinceToken(request, token) {
                var response = { changes: '', rsdata: '' };
                var model = getListModel(request);
                var changesSinceToken = getChangeTokenCache(request);
                /** Build XML for any list items that have been added or updated */
                response.rsdata = buildRSDataNode(changesSinceToken.pendingUpdates);
                /* Build Changes XML node for entities that have been deleted.  There are other valid changes [Restore] but
                 at this point we're only concerned with mocking deleted items */
                response.changes = '<Changes LastChangeToken="' + token + '">';
                if (changesSinceToken.pendingDeletions.length > 0) {
                    _.each(changesSinceToken.pendingDeletions, function (listItemId) {
                        response.changes += '<Id ChangeType="Delete" UniqueId="">' + listItemId + '</Id>';
                    });
                }
                response.changes += '</Changes>';
                /** Clear out changes for next time */
                changesSinceToken.clear(token);
                return response;
            }
            function registerUpdate(request, zrow) {
                getChangeTokenCache(request).pendingUpdates.push(zrow);
            }
            function registerDeletion(request, id) {
                getChangeTokenCache(request).pendingDeletions.push(id);
            }
            function getChangeTokenCache(request) {
                var model = getListModel(request);
                changeQueue[model.list.guid] =
                    changeQueue[model.list.guid] || new ModelChangeQueue(generateChangeToken(request));
                return changeQueue[model.list.guid];
            }
            function registerChangeToken(request, token) {
                var model = getListModel(request);
                changeQueue[model.list.guid] = new ModelChangeQueue(token);
            }
            function generateChangeToken(request) {
                var model = getListModel(request);
                return _.uniqueId(model ? model.list.guid : '');
            }
            function listsResponseEnvelope(operation) {
                var response = {
                    footer: "</" + operation + "Result></" + operation + "Response></soap:Body></soap:Envelope>",
                    header: "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope " + xmlNS.soap + "><soap:Body>\n                        <" + operation + "Response xmlns=\"http://schemas.microsoft.com/sharepoint/soap/\"><" + operation + "Result>",
                    payload: ''
                };
                return response;
            }
            function getListModel(request) {
                /** Find the list id */
                var listGuid = getListId(request);
                /** Check with cache service to see if a list with the matching guid has registered */
                return apCacheService.getModel(listGuid);
            }
            function getListId(request) {
                return getXMLNodeContents(request, 'listName');
            }
            function getChangeToken(request) {
                return getXMLNodeContents(request, 'changeToken');
            }
            function getXMLNodeContents(request, element) {
                var changeToken;
                var changeTokenNode = $(request).find(element);
                if (changeTokenNode.length) {
                    changeToken = changeTokenNode.text();
                }
                return changeToken;
            }
            function generateMockListItems(request, quantity) {
                var model = getListModel(request);
                var mockRecords = model.generateMockData({ quantity: quantity });
                var zrows = [];
                _.each(mockRecords, function (mockRecord) {
                    var changeObject = {};
                    /** Generate value pairs for each property on the mock object */
                    var valuePairs = apEncodeService.generateValuePairs(model.list.fields, mockRecord);
                    /** Create a key/val property for each valuePiar */
                    _.each(valuePairs, function (valuePair) {
                        changeObject[valuePair[0]] = valuePair[1];
                    });
                    zrows.push(createZRow(changeObject));
                });
                return zrows;
            }
            function getNamedListItems(operation, request) {
                var responseXML;
                /** Check with cache service to see if a list with the matching guid has registered */
                var listModel = getListModel(request);
                if (listModel) {
                    /** Use the list name in the model to see if we have cached XML */
                    responseXML = getCachedResponse(operation, listModel.list.title);
                }
                if (!responseXML) {
                    console.info('No Cached Data Found For ' + listModel.list.title);
                    /** No cached XML so just use the default operation response */
                    responseXML = getCachedResponse(operation);
                }
                return responseXML;
            }
            function getCachedResponse(operation, fileName) {
                var response;
                fileName = fileName || operation;
                if (apCachedXML.lists[fileName] && apCachedXML.lists[fileName][operation]) {
                    response = apCachedXML.lists[fileName][operation];
                }
                else if (_.keys(apCachedXML.lists[fileName]).length > 0) {
                    /** The exact operation we'd looking for isn't found but there's another there so we'll try that */
                    response = apCachedXML.lists[fileName][_.keys(apCachedXML.lists[fileName])[0]];
                }
                return response;
            }
            function responder(responseXML) {
                return [200, responseXML];
            }
        }
        return MockBackend;
    })();
    ap.MockBackend = MockBackend;
    angular.module('angularPoint')
        .run(MockBackend);
})(ap || (ap = {}));

//# sourceMappingURL=../mock/apMockBackend.mock.js.map
/**
 * @license AngularJS v1.4.6
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {

'use strict';

/**
 * @ngdoc object
 * @name angular.mock
 * @description
 *
 * Namespace from 'angular-mocks.js' which contains testing related code.
 */
angular.mock = {};

/**
 * ! This is a private undocumented service !
 *
 * @name $browser
 *
 * @description
 * This service is a mock implementation of {@link ng.$browser}. It provides fake
 * implementation for commonly used browser apis that are hard to test, e.g. setTimeout, xhr,
 * cookies, etc...
 *
 * The api of this service is the same as that of the real {@link ng.$browser $browser}, except
 * that there are several helper methods available which can be used in tests.
 */
angular.mock.$BrowserProvider = function() {
  this.$get = function() {
    return new angular.mock.$Browser();
  };
};

angular.mock.$Browser = function() {
  var self = this;

  this.isMock = true;
  self.$$url = "http://server/";
  self.$$lastUrl = self.$$url; // used by url polling fn
  self.pollFns = [];

  // TODO(vojta): remove this temporary api
  self.$$completeOutstandingRequest = angular.noop;
  self.$$incOutstandingRequestCount = angular.noop;


  // register url polling fn

  self.onUrlChange = function(listener) {
    self.pollFns.push(
      function() {
        if (self.$$lastUrl !== self.$$url || self.$$state !== self.$$lastState) {
          self.$$lastUrl = self.$$url;
          self.$$lastState = self.$$state;
          listener(self.$$url, self.$$state);
        }
      }
    );

    return listener;
  };

  self.$$applicationDestroyed = angular.noop;
  self.$$checkUrlChange = angular.noop;

  self.deferredFns = [];
  self.deferredNextId = 0;

  self.defer = function(fn, delay) {
    delay = delay || 0;
    self.deferredFns.push({time:(self.defer.now + delay), fn:fn, id: self.deferredNextId});
    self.deferredFns.sort(function(a, b) { return a.time - b.time;});
    return self.deferredNextId++;
  };


  /**
   * @name $browser#defer.now
   *
   * @description
   * Current milliseconds mock time.
   */
  self.defer.now = 0;


  self.defer.cancel = function(deferId) {
    var fnIndex;

    angular.forEach(self.deferredFns, function(fn, index) {
      if (fn.id === deferId) fnIndex = index;
    });

    if (angular.isDefined(fnIndex)) {
      self.deferredFns.splice(fnIndex, 1);
      return true;
    }

    return false;
  };


  /**
   * @name $browser#defer.flush
   *
   * @description
   * Flushes all pending requests and executes the defer callbacks.
   *
   * @param {number=} number of milliseconds to flush. See {@link #defer.now}
   */
  self.defer.flush = function(delay) {
    if (angular.isDefined(delay)) {
      self.defer.now += delay;
    } else {
      if (self.deferredFns.length) {
        self.defer.now = self.deferredFns[self.deferredFns.length - 1].time;
      } else {
        throw new Error('No deferred tasks to be flushed');
      }
    }

    while (self.deferredFns.length && self.deferredFns[0].time <= self.defer.now) {
      self.deferredFns.shift().fn();
    }
  };

  self.$$baseHref = '/';
  self.baseHref = function() {
    return this.$$baseHref;
  };
};
angular.mock.$Browser.prototype = {

/**
  * @name $browser#poll
  *
  * @description
  * run all fns in pollFns
  */
  poll: function poll() {
    angular.forEach(this.pollFns, function(pollFn) {
      pollFn();
    });
  },

  url: function(url, replace, state) {
    if (angular.isUndefined(state)) {
      state = null;
    }
    if (url) {
      this.$$url = url;
      // Native pushState serializes & copies the object; simulate it.
      this.$$state = angular.copy(state);
      return this;
    }

    return this.$$url;
  },

  state: function() {
    return this.$$state;
  },

  notifyWhenNoOutstandingRequests: function(fn) {
    fn();
  }
};


/**
 * @ngdoc provider
 * @name $exceptionHandlerProvider
 *
 * @description
 * Configures the mock implementation of {@link ng.$exceptionHandler} to rethrow or to log errors
 * passed to the `$exceptionHandler`.
 */

/**
 * @ngdoc service
 * @name $exceptionHandler
 *
 * @description
 * Mock implementation of {@link ng.$exceptionHandler} that rethrows or logs errors passed
 * to it. See {@link ngMock.$exceptionHandlerProvider $exceptionHandlerProvider} for configuration
 * information.
 *
 *
 * ```js
 *   describe('$exceptionHandlerProvider', function() {
 *
 *     it('should capture log messages and exceptions', function() {
 *
 *       module(function($exceptionHandlerProvider) {
 *         $exceptionHandlerProvider.mode('log');
 *       });
 *
 *       inject(function($log, $exceptionHandler, $timeout) {
 *         $timeout(function() { $log.log(1); });
 *         $timeout(function() { $log.log(2); throw 'banana peel'; });
 *         $timeout(function() { $log.log(3); });
 *         expect($exceptionHandler.errors).toEqual([]);
 *         expect($log.assertEmpty());
 *         $timeout.flush();
 *         expect($exceptionHandler.errors).toEqual(['banana peel']);
 *         expect($log.log.logs).toEqual([[1], [2], [3]]);
 *       });
 *     });
 *   });
 * ```
 */

angular.mock.$ExceptionHandlerProvider = function() {
  var handler;

  /**
   * @ngdoc method
   * @name $exceptionHandlerProvider#mode
   *
   * @description
   * Sets the logging mode.
   *
   * @param {string} mode Mode of operation, defaults to `rethrow`.
   *
   *   - `log`: Sometimes it is desirable to test that an error is thrown, for this case the `log`
   *            mode stores an array of errors in `$exceptionHandler.errors`, to allow later
   *            assertion of them. See {@link ngMock.$log#assertEmpty assertEmpty()} and
   *            {@link ngMock.$log#reset reset()}
   *   - `rethrow`: If any errors are passed to the handler in tests, it typically means that there
   *                is a bug in the application or test, so this mock will make these tests fail.
   *                For any implementations that expect exceptions to be thrown, the `rethrow` mode
   *                will also maintain a log of thrown errors.
   */
  this.mode = function(mode) {

    switch (mode) {
      case 'log':
      case 'rethrow':
        var errors = [];
        handler = function(e) {
          if (arguments.length == 1) {
            errors.push(e);
          } else {
            errors.push([].slice.call(arguments, 0));
          }
          if (mode === "rethrow") {
            throw e;
          }
        };
        handler.errors = errors;
        break;
      default:
        throw new Error("Unknown mode '" + mode + "', only 'log'/'rethrow' modes are allowed!");
    }
  };

  this.$get = function() {
    return handler;
  };

  this.mode('rethrow');
};


/**
 * @ngdoc service
 * @name $log
 *
 * @description
 * Mock implementation of {@link ng.$log} that gathers all logged messages in arrays
 * (one array per logging level). These arrays are exposed as `logs` property of each of the
 * level-specific log function, e.g. for level `error` the array is exposed as `$log.error.logs`.
 *
 */
angular.mock.$LogProvider = function() {
  var debug = true;

  function concat(array1, array2, index) {
    return array1.concat(Array.prototype.slice.call(array2, index));
  }

  this.debugEnabled = function(flag) {
    if (angular.isDefined(flag)) {
      debug = flag;
      return this;
    } else {
      return debug;
    }
  };

  this.$get = function() {
    var $log = {
      log: function() { $log.log.logs.push(concat([], arguments, 0)); },
      warn: function() { $log.warn.logs.push(concat([], arguments, 0)); },
      info: function() { $log.info.logs.push(concat([], arguments, 0)); },
      error: function() { $log.error.logs.push(concat([], arguments, 0)); },
      debug: function() {
        if (debug) {
          $log.debug.logs.push(concat([], arguments, 0));
        }
      }
    };

    /**
     * @ngdoc method
     * @name $log#reset
     *
     * @description
     * Reset all of the logging arrays to empty.
     */
    $log.reset = function() {
      /**
       * @ngdoc property
       * @name $log#log.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#log `log()`}.
       *
       * @example
       * ```js
       * $log.log('Some Log');
       * var first = $log.log.logs.unshift();
       * ```
       */
      $log.log.logs = [];
      /**
       * @ngdoc property
       * @name $log#info.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#info `info()`}.
       *
       * @example
       * ```js
       * $log.info('Some Info');
       * var first = $log.info.logs.unshift();
       * ```
       */
      $log.info.logs = [];
      /**
       * @ngdoc property
       * @name $log#warn.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#warn `warn()`}.
       *
       * @example
       * ```js
       * $log.warn('Some Warning');
       * var first = $log.warn.logs.unshift();
       * ```
       */
      $log.warn.logs = [];
      /**
       * @ngdoc property
       * @name $log#error.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#error `error()`}.
       *
       * @example
       * ```js
       * $log.error('Some Error');
       * var first = $log.error.logs.unshift();
       * ```
       */
      $log.error.logs = [];
        /**
       * @ngdoc property
       * @name $log#debug.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#debug `debug()`}.
       *
       * @example
       * ```js
       * $log.debug('Some Error');
       * var first = $log.debug.logs.unshift();
       * ```
       */
      $log.debug.logs = [];
    };

    /**
     * @ngdoc method
     * @name $log#assertEmpty
     *
     * @description
     * Assert that all of the logging methods have no logged messages. If any messages are present,
     * an exception is thrown.
     */
    $log.assertEmpty = function() {
      var errors = [];
      angular.forEach(['error', 'warn', 'info', 'log', 'debug'], function(logLevel) {
        angular.forEach($log[logLevel].logs, function(log) {
          angular.forEach(log, function(logItem) {
            errors.push('MOCK $log (' + logLevel + '): ' + String(logItem) + '\n' +
                        (logItem.stack || ''));
          });
        });
      });
      if (errors.length) {
        errors.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or " +
          "an expected log message was not checked and removed:");
        errors.push('');
        throw new Error(errors.join('\n---------\n'));
      }
    };

    $log.reset();
    return $log;
  };
};


/**
 * @ngdoc service
 * @name $interval
 *
 * @description
 * Mock implementation of the $interval service.
 *
 * Use {@link ngMock.$interval#flush `$interval.flush(millis)`} to
 * move forward by `millis` milliseconds and trigger any functions scheduled to run in that
 * time.
 *
 * @param {function()} fn A function that should be called repeatedly.
 * @param {number} delay Number of milliseconds between each function call.
 * @param {number=} [count=0] Number of times to repeat. If not set, or 0, will repeat
 *   indefinitely.
 * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise
 *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.
 * @param {...*=} Pass additional parameters to the executed function.
 * @returns {promise} A promise which will be notified on each iteration.
 */
angular.mock.$IntervalProvider = function() {
  this.$get = ['$browser', '$rootScope', '$q', '$$q',
       function($browser,   $rootScope,   $q,   $$q) {
    var repeatFns = [],
        nextRepeatId = 0,
        now = 0;

    var $interval = function(fn, delay, count, invokeApply) {
      var hasParams = arguments.length > 4,
          args = hasParams ? Array.prototype.slice.call(arguments, 4) : [],
          iteration = 0,
          skipApply = (angular.isDefined(invokeApply) && !invokeApply),
          deferred = (skipApply ? $$q : $q).defer(),
          promise = deferred.promise;

      count = (angular.isDefined(count)) ? count : 0;
      promise.then(null, null, (!hasParams) ? fn : function() {
        fn.apply(null, args);
      });

      promise.$$intervalId = nextRepeatId;

      function tick() {
        deferred.notify(iteration++);

        if (count > 0 && iteration >= count) {
          var fnIndex;
          deferred.resolve(iteration);

          angular.forEach(repeatFns, function(fn, index) {
            if (fn.id === promise.$$intervalId) fnIndex = index;
          });

          if (angular.isDefined(fnIndex)) {
            repeatFns.splice(fnIndex, 1);
          }
        }

        if (skipApply) {
          $browser.defer.flush();
        } else {
          $rootScope.$apply();
        }
      }

      repeatFns.push({
        nextTime:(now + delay),
        delay: delay,
        fn: tick,
        id: nextRepeatId,
        deferred: deferred
      });
      repeatFns.sort(function(a, b) { return a.nextTime - b.nextTime;});

      nextRepeatId++;
      return promise;
    };
    /**
     * @ngdoc method
     * @name $interval#cancel
     *
     * @description
     * Cancels a task associated with the `promise`.
     *
     * @param {promise} promise A promise from calling the `$interval` function.
     * @returns {boolean} Returns `true` if the task was successfully cancelled.
     */
    $interval.cancel = function(promise) {
      if (!promise) return false;
      var fnIndex;

      angular.forEach(repeatFns, function(fn, index) {
        if (fn.id === promise.$$intervalId) fnIndex = index;
      });

      if (angular.isDefined(fnIndex)) {
        repeatFns[fnIndex].deferred.reject('canceled');
        repeatFns.splice(fnIndex, 1);
        return true;
      }

      return false;
    };

    /**
     * @ngdoc method
     * @name $interval#flush
     * @description
     *
     * Runs interval tasks scheduled to be run in the next `millis` milliseconds.
     *
     * @param {number=} millis maximum timeout amount to flush up until.
     *
     * @return {number} The amount of time moved forward.
     */
    $interval.flush = function(millis) {
      now += millis;
      while (repeatFns.length && repeatFns[0].nextTime <= now) {
        var task = repeatFns[0];
        task.fn();
        task.nextTime += task.delay;
        repeatFns.sort(function(a, b) { return a.nextTime - b.nextTime;});
      }
      return millis;
    };

    return $interval;
  }];
};


/* jshint -W101 */
/* The R_ISO8061_STR regex is never going to fit into the 100 char limit!
 * This directive should go inside the anonymous function but a bug in JSHint means that it would
 * not be enacted early enough to prevent the warning.
 */
var R_ISO8061_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;

function jsonStringToDate(string) {
  var match;
  if (match = string.match(R_ISO8061_STR)) {
    var date = new Date(0),
        tzHour = 0,
        tzMin  = 0;
    if (match[9]) {
      tzHour = toInt(match[9] + match[10]);
      tzMin = toInt(match[9] + match[11]);
    }
    date.setUTCFullYear(toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
    date.setUTCHours(toInt(match[4] || 0) - tzHour,
                     toInt(match[5] || 0) - tzMin,
                     toInt(match[6] || 0),
                     toInt(match[7] || 0));
    return date;
  }
  return string;
}

function toInt(str) {
  return parseInt(str, 10);
}

function padNumber(num, digits, trim) {
  var neg = '';
  if (num < 0) {
    neg =  '-';
    num = -num;
  }
  num = '' + num;
  while (num.length < digits) num = '0' + num;
  if (trim) {
    num = num.substr(num.length - digits);
  }
  return neg + num;
}


/**
 * @ngdoc type
 * @name angular.mock.TzDate
 * @description
 *
 * *NOTE*: this is not an injectable instance, just a globally available mock class of `Date`.
 *
 * Mock of the Date type which has its timezone specified via constructor arg.
 *
 * The main purpose is to create Date-like instances with timezone fixed to the specified timezone
 * offset, so that we can test code that depends on local timezone settings without dependency on
 * the time zone settings of the machine where the code is running.
 *
 * @param {number} offset Offset of the *desired* timezone in hours (fractions will be honored)
 * @param {(number|string)} timestamp Timestamp representing the desired time in *UTC*
 *
 * @example
 * !!!! WARNING !!!!!
 * This is not a complete Date object so only methods that were implemented can be called safely.
 * To make matters worse, TzDate instances inherit stuff from Date via a prototype.
 *
 * We do our best to intercept calls to "unimplemented" methods, but since the list of methods is
 * incomplete we might be missing some non-standard methods. This can result in errors like:
 * "Date.prototype.foo called on incompatible Object".
 *
 * ```js
 * var newYearInBratislava = new TzDate(-1, '2009-12-31T23:00:00Z');
 * newYearInBratislava.getTimezoneOffset() => -60;
 * newYearInBratislava.getFullYear() => 2010;
 * newYearInBratislava.getMonth() => 0;
 * newYearInBratislava.getDate() => 1;
 * newYearInBratislava.getHours() => 0;
 * newYearInBratislava.getMinutes() => 0;
 * newYearInBratislava.getSeconds() => 0;
 * ```
 *
 */
angular.mock.TzDate = function(offset, timestamp) {
  var self = new Date(0);
  if (angular.isString(timestamp)) {
    var tsStr = timestamp;

    self.origDate = jsonStringToDate(timestamp);

    timestamp = self.origDate.getTime();
    if (isNaN(timestamp)) {
      throw {
        name: "Illegal Argument",
        message: "Arg '" + tsStr + "' passed into TzDate constructor is not a valid date string"
      };
    }
  } else {
    self.origDate = new Date(timestamp);
  }

  var localOffset = new Date(timestamp).getTimezoneOffset();
  self.offsetDiff = localOffset * 60 * 1000 - offset * 1000 * 60 * 60;
  self.date = new Date(timestamp + self.offsetDiff);

  self.getTime = function() {
    return self.date.getTime() - self.offsetDiff;
  };

  self.toLocaleDateString = function() {
    return self.date.toLocaleDateString();
  };

  self.getFullYear = function() {
    return self.date.getFullYear();
  };

  self.getMonth = function() {
    return self.date.getMonth();
  };

  self.getDate = function() {
    return self.date.getDate();
  };

  self.getHours = function() {
    return self.date.getHours();
  };

  self.getMinutes = function() {
    return self.date.getMinutes();
  };

  self.getSeconds = function() {
    return self.date.getSeconds();
  };

  self.getMilliseconds = function() {
    return self.date.getMilliseconds();
  };

  self.getTimezoneOffset = function() {
    return offset * 60;
  };

  self.getUTCFullYear = function() {
    return self.origDate.getUTCFullYear();
  };

  self.getUTCMonth = function() {
    return self.origDate.getUTCMonth();
  };

  self.getUTCDate = function() {
    return self.origDate.getUTCDate();
  };

  self.getUTCHours = function() {
    return self.origDate.getUTCHours();
  };

  self.getUTCMinutes = function() {
    return self.origDate.getUTCMinutes();
  };

  self.getUTCSeconds = function() {
    return self.origDate.getUTCSeconds();
  };

  self.getUTCMilliseconds = function() {
    return self.origDate.getUTCMilliseconds();
  };

  self.getDay = function() {
    return self.date.getDay();
  };

  // provide this method only on browsers that already have it
  if (self.toISOString) {
    self.toISOString = function() {
      return padNumber(self.origDate.getUTCFullYear(), 4) + '-' +
            padNumber(self.origDate.getUTCMonth() + 1, 2) + '-' +
            padNumber(self.origDate.getUTCDate(), 2) + 'T' +
            padNumber(self.origDate.getUTCHours(), 2) + ':' +
            padNumber(self.origDate.getUTCMinutes(), 2) + ':' +
            padNumber(self.origDate.getUTCSeconds(), 2) + '.' +
            padNumber(self.origDate.getUTCMilliseconds(), 3) + 'Z';
    };
  }

  //hide all methods not implemented in this mock that the Date prototype exposes
  var unimplementedMethods = ['getUTCDay',
      'getYear', 'setDate', 'setFullYear', 'setHours', 'setMilliseconds',
      'setMinutes', 'setMonth', 'setSeconds', 'setTime', 'setUTCDate', 'setUTCFullYear',
      'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds',
      'setYear', 'toDateString', 'toGMTString', 'toJSON', 'toLocaleFormat', 'toLocaleString',
      'toLocaleTimeString', 'toSource', 'toString', 'toTimeString', 'toUTCString', 'valueOf'];

  angular.forEach(unimplementedMethods, function(methodName) {
    self[methodName] = function() {
      throw new Error("Method '" + methodName + "' is not implemented in the TzDate mock");
    };
  });

  return self;
};

//make "tzDateInstance instanceof Date" return true
angular.mock.TzDate.prototype = Date.prototype;
/* jshint +W101 */

angular.mock.animate = angular.module('ngAnimateMock', ['ng'])

  .config(['$provide', function($provide) {

    $provide.factory('$$forceReflow', function() {
      function reflowFn() {
        reflowFn.totalReflows++;
      }
      reflowFn.totalReflows = 0;
      return reflowFn;
    });

    $provide.factory('$$animateAsyncRun', function() {
      var queue = [];
      var queueFn = function() {
        return function(fn) {
          queue.push(fn);
        };
      };
      queueFn.flush = function() {
        if (queue.length === 0) return false;

        for (var i = 0; i < queue.length; i++) {
          queue[i]();
        }
        queue = [];

        return true;
      };
      return queueFn;
    });

    $provide.decorator('$animate', ['$delegate', '$timeout', '$browser', '$$rAF',
                                    '$$forceReflow', '$$animateAsyncRun', '$rootScope',
                            function($delegate,   $timeout,   $browser,   $$rAF,
                                     $$forceReflow,   $$animateAsyncRun,  $rootScope) {
      var animate = {
        queue: [],
        cancel: $delegate.cancel,
        on: $delegate.on,
        off: $delegate.off,
        pin: $delegate.pin,
        get reflows() {
          return $$forceReflow.totalReflows;
        },
        enabled: $delegate.enabled,
        flush: function() {
          $rootScope.$digest();

          var doNextRun, somethingFlushed = false;
          do {
            doNextRun = false;

            if ($$rAF.queue.length) {
              $$rAF.flush();
              doNextRun = somethingFlushed = true;
            }

            if ($$animateAsyncRun.flush()) {
              doNextRun = somethingFlushed = true;
            }
          } while (doNextRun);

          if (!somethingFlushed) {
            throw new Error('No pending animations ready to be closed or flushed');
          }

          $rootScope.$digest();
        }
      };

      angular.forEach(
        ['animate','enter','leave','move','addClass','removeClass','setClass'], function(method) {
        animate[method] = function() {
          animate.queue.push({
            event: method,
            element: arguments[0],
            options: arguments[arguments.length - 1],
            args: arguments
          });
          return $delegate[method].apply($delegate, arguments);
        };
      });

      return animate;
    }]);

  }]);


/**
 * @ngdoc function
 * @name angular.mock.dump
 * @description
 *
 * *NOTE*: this is not an injectable instance, just a globally available function.
 *
 * Method for serializing common angular objects (scope, elements, etc..) into strings, useful for
 * debugging.
 *
 * This method is also available on window, where it can be used to display objects on debug
 * console.
 *
 * @param {*} object - any object to turn into string.
 * @return {string} a serialized string of the argument
 */
angular.mock.dump = function(object) {
  return serialize(object);

  function serialize(object) {
    var out;

    if (angular.isElement(object)) {
      object = angular.element(object);
      out = angular.element('<div></div>');
      angular.forEach(object, function(element) {
        out.append(angular.element(element).clone());
      });
      out = out.html();
    } else if (angular.isArray(object)) {
      out = [];
      angular.forEach(object, function(o) {
        out.push(serialize(o));
      });
      out = '[ ' + out.join(', ') + ' ]';
    } else if (angular.isObject(object)) {
      if (angular.isFunction(object.$eval) && angular.isFunction(object.$apply)) {
        out = serializeScope(object);
      } else if (object instanceof Error) {
        out = object.stack || ('' + object.name + ': ' + object.message);
      } else {
        // TODO(i): this prevents methods being logged,
        // we should have a better way to serialize objects
        out = angular.toJson(object, true);
      }
    } else {
      out = String(object);
    }

    return out;
  }

  function serializeScope(scope, offset) {
    offset = offset ||  '  ';
    var log = [offset + 'Scope(' + scope.$id + '): {'];
    for (var key in scope) {
      if (Object.prototype.hasOwnProperty.call(scope, key) && !key.match(/^(\$|this)/)) {
        log.push('  ' + key + ': ' + angular.toJson(scope[key]));
      }
    }
    var child = scope.$$childHead;
    while (child) {
      log.push(serializeScope(child, offset + '  '));
      child = child.$$nextSibling;
    }
    log.push('}');
    return log.join('\n' + offset);
  }
};

/**
 * @ngdoc service
 * @name $httpBackend
 * @description
 * Fake HTTP backend implementation suitable for unit testing applications that use the
 * {@link ng.$http $http service}.
 *
 * *Note*: For fake HTTP backend implementation suitable for end-to-end testing or backend-less
 * development please see {@link ngMockE2E.$httpBackend e2e $httpBackend mock}.
 *
 * During unit testing, we want our unit tests to run quickly and have no external dependencies so
 * we don’t want to send [XHR](https://developer.mozilla.org/en/xmlhttprequest) or
 * [JSONP](http://en.wikipedia.org/wiki/JSONP) requests to a real server. All we really need is
 * to verify whether a certain request has been sent or not, or alternatively just let the
 * application make requests, respond with pre-trained responses and assert that the end result is
 * what we expect it to be.
 *
 * This mock implementation can be used to respond with static or dynamic responses via the
 * `expect` and `when` apis and their shortcuts (`expectGET`, `whenPOST`, etc).
 *
 * When an Angular application needs some data from a server, it calls the $http service, which
 * sends the request to a real server using $httpBackend service. With dependency injection, it is
 * easy to inject $httpBackend mock (which has the same API as $httpBackend) and use it to verify
 * the requests and respond with some testing data without sending a request to a real server.
 *
 * There are two ways to specify what test data should be returned as http responses by the mock
 * backend when the code under test makes http requests:
 *
 * - `$httpBackend.expect` - specifies a request expectation
 * - `$httpBackend.when` - specifies a backend definition
 *
 *
 * # Request Expectations vs Backend Definitions
 *
 * Request expectations provide a way to make assertions about requests made by the application and
 * to define responses for those requests. The test will fail if the expected requests are not made
 * or they are made in the wrong order.
 *
 * Backend definitions allow you to define a fake backend for your application which doesn't assert
 * if a particular request was made or not, it just returns a trained response if a request is made.
 * The test will pass whether or not the request gets made during testing.
 *
 *
 * <table class="table">
 *   <tr><th width="220px"></th><th>Request expectations</th><th>Backend definitions</th></tr>
 *   <tr>
 *     <th>Syntax</th>
 *     <td>.expect(...).respond(...)</td>
 *     <td>.when(...).respond(...)</td>
 *   </tr>
 *   <tr>
 *     <th>Typical usage</th>
 *     <td>strict unit tests</td>
 *     <td>loose (black-box) unit testing</td>
 *   </tr>
 *   <tr>
 *     <th>Fulfills multiple requests</th>
 *     <td>NO</td>
 *     <td>YES</td>
 *   </tr>
 *   <tr>
 *     <th>Order of requests matters</th>
 *     <td>YES</td>
 *     <td>NO</td>
 *   </tr>
 *   <tr>
 *     <th>Request required</th>
 *     <td>YES</td>
 *     <td>NO</td>
 *   </tr>
 *   <tr>
 *     <th>Response required</th>
 *     <td>optional (see below)</td>
 *     <td>YES</td>
 *   </tr>
 * </table>
 *
 * In cases where both backend definitions and request expectations are specified during unit
 * testing, the request expectations are evaluated first.
 *
 * If a request expectation has no response specified, the algorithm will search your backend
 * definitions for an appropriate response.
 *
 * If a request didn't match any expectation or if the expectation doesn't have the response
 * defined, the backend definitions are evaluated in sequential order to see if any of them match
 * the request. The response from the first matched definition is returned.
 *
 *
 * # Flushing HTTP requests
 *
 * The $httpBackend used in production always responds to requests asynchronously. If we preserved
 * this behavior in unit testing, we'd have to create async unit tests, which are hard to write,
 * to follow and to maintain. But neither can the testing mock respond synchronously; that would
 * change the execution of the code under test. For this reason, the mock $httpBackend has a
 * `flush()` method, which allows the test to explicitly flush pending requests. This preserves
 * the async api of the backend, while allowing the test to execute synchronously.
 *
 *
 * # Unit testing with mock $httpBackend
 * The following code shows how to setup and use the mock backend when unit testing a controller.
 * First we create the controller under test:
 *
  ```js
  // The module code
  angular
    .module('MyApp', [])
    .controller('MyController', MyController);

  // The controller code
  function MyController($scope, $http) {
    var authToken;

    $http.get('/auth.py').success(function(data, status, headers) {
      authToken = headers('A-Token');
      $scope.user = data;
    });

    $scope.saveMessage = function(message) {
      var headers = { 'Authorization': authToken };
      $scope.status = 'Saving...';

      $http.post('/add-msg.py', message, { headers: headers } ).success(function(response) {
        $scope.status = '';
      }).error(function() {
        $scope.status = 'Failed...';
      });
    };
  }
  ```
 *
 * Now we setup the mock backend and create the test specs:
 *
  ```js
    // testing controller
    describe('MyController', function() {
       var $httpBackend, $rootScope, createController, authRequestHandler;

       // Set up the module
       beforeEach(module('MyApp'));

       beforeEach(inject(function($injector) {
         // Set up the mock http service responses
         $httpBackend = $injector.get('$httpBackend');
         // backend definition common for all tests
         authRequestHandler = $httpBackend.when('GET', '/auth.py')
                                .respond({userId: 'userX'}, {'A-Token': 'xxx'});

         // Get hold of a scope (i.e. the root scope)
         $rootScope = $injector.get('$rootScope');
         // The $controller service is used to create instances of controllers
         var $controller = $injector.get('$controller');

         createController = function() {
           return $controller('MyController', {'$scope' : $rootScope });
         };
       }));


       afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
       });


       it('should fetch authentication token', function() {
         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
       });


       it('should fail authentication', function() {

         // Notice how you can change the response even after it was set
         authRequestHandler.respond(401, '');

         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
         expect($rootScope.status).toBe('Failed...');
       });


       it('should send msg to server', function() {
         var controller = createController();
         $httpBackend.flush();

         // now you don’t care about the authentication, but
         // the controller will still send the request and
         // $httpBackend will respond without you having to
         // specify the expectation and response for this request

         $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
         $rootScope.saveMessage('message content');
         expect($rootScope.status).toBe('Saving...');
         $httpBackend.flush();
         expect($rootScope.status).toBe('');
       });


       it('should send auth header', function() {
         var controller = createController();
         $httpBackend.flush();

         $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
           // check if the header was sent, if it wasn't the expectation won't
           // match the request and the test will fail
           return headers['Authorization'] == 'xxx';
         }).respond(201, '');

         $rootScope.saveMessage('whatever');
         $httpBackend.flush();
       });
    });
   ```
 */
angular.mock.$HttpBackendProvider = function() {
  this.$get = ['$rootScope', '$timeout', createHttpBackendMock];
};

/**
 * General factory function for $httpBackend mock.
 * Returns instance for unit testing (when no arguments specified):
 *   - passing through is disabled
 *   - auto flushing is disabled
 *
 * Returns instance for e2e testing (when `$delegate` and `$browser` specified):
 *   - passing through (delegating request to real backend) is enabled
 *   - auto flushing is enabled
 *
 * @param {Object=} $delegate Real $httpBackend instance (allow passing through if specified)
 * @param {Object=} $browser Auto-flushing enabled if specified
 * @return {Object} Instance of $httpBackend mock
 */
function createHttpBackendMock($rootScope, $timeout, $delegate, $browser) {
  var definitions = [],
      expectations = [],
      responses = [],
      responsesPush = angular.bind(responses, responses.push),
      copy = angular.copy;

  function createResponse(status, data, headers, statusText) {
    if (angular.isFunction(status)) return status;

    return function() {
      return angular.isNumber(status)
          ? [status, data, headers, statusText]
          : [200, status, data, headers];
    };
  }

  // TODO(vojta): change params to: method, url, data, headers, callback
  function $httpBackend(method, url, data, callback, headers, timeout, withCredentials) {
    var xhr = new MockXhr(),
        expectation = expectations[0],
        wasExpected = false;

    function prettyPrint(data) {
      return (angular.isString(data) || angular.isFunction(data) || data instanceof RegExp)
          ? data
          : angular.toJson(data);
    }

    function wrapResponse(wrapped) {
      if (!$browser && timeout) {
        timeout.then ? timeout.then(handleTimeout) : $timeout(handleTimeout, timeout);
      }

      return handleResponse;

      function handleResponse() {
        var response = wrapped.response(method, url, data, headers);
        xhr.$$respHeaders = response[2];
        callback(copy(response[0]), copy(response[1]), xhr.getAllResponseHeaders(),
                 copy(response[3] || ''));
      }

      function handleTimeout() {
        for (var i = 0, ii = responses.length; i < ii; i++) {
          if (responses[i] === handleResponse) {
            responses.splice(i, 1);
            callback(-1, undefined, '');
            break;
          }
        }
      }
    }

    if (expectation && expectation.match(method, url)) {
      if (!expectation.matchData(data)) {
        throw new Error('Expected ' + expectation + ' with different data\n' +
            'EXPECTED: ' + prettyPrint(expectation.data) + '\nGOT:      ' + data);
      }

      if (!expectation.matchHeaders(headers)) {
        throw new Error('Expected ' + expectation + ' with different headers\n' +
                        'EXPECTED: ' + prettyPrint(expectation.headers) + '\nGOT:      ' +
                        prettyPrint(headers));
      }

      expectations.shift();

      if (expectation.response) {
        responses.push(wrapResponse(expectation));
        return;
      }
      wasExpected = true;
    }

    var i = -1, definition;
    while ((definition = definitions[++i])) {
      if (definition.match(method, url, data, headers || {})) {
        if (definition.response) {
          // if $browser specified, we do auto flush all requests
          ($browser ? $browser.defer : responsesPush)(wrapResponse(definition));
        } else if (definition.passThrough) {
          $delegate(method, url, data, callback, headers, timeout, withCredentials);
        } else throw new Error('No response defined !');
        return;
      }
    }
    throw wasExpected ?
        new Error('No response defined !') :
        new Error('Unexpected request: ' + method + ' ' + url + '\n' +
                  (expectation ? 'Expected ' + expectation : 'No more request expected'));
  }

  /**
   * @ngdoc method
   * @name $httpBackend#when
   * @description
   * Creates a new backend definition.
   *
   * @param {string} method HTTP method.
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current definition.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   *
   *  - respond –
   *      `{function([status,] data[, headers, statusText])
   *      | function(function(method, url, data, headers)}`
   *    – The respond method takes a set of static data to be returned or a function that can
   *    return an array containing response status (number), response data (string), response
   *    headers (Object), and the text for the status (string). The respond method returns the
   *    `requestHandler` object for possible overrides.
   */
  $httpBackend.when = function(method, url, data, headers) {
    var definition = new MockHttpExpectation(method, url, data, headers),
        chain = {
          respond: function(status, data, headers, statusText) {
            definition.passThrough = undefined;
            definition.response = createResponse(status, data, headers, statusText);
            return chain;
          }
        };

    if ($browser) {
      chain.passThrough = function() {
        definition.response = undefined;
        definition.passThrough = true;
        return chain;
      };
    }

    definitions.push(definition);
    return chain;
  };

  /**
   * @ngdoc method
   * @name $httpBackend#whenGET
   * @description
   * Creates a new backend definition for GET requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenHEAD
   * @description
   * Creates a new backend definition for HEAD requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenDELETE
   * @description
   * Creates a new backend definition for DELETE requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenPOST
   * @description
   * Creates a new backend definition for POST requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenPUT
   * @description
   * Creates a new backend definition for PUT requests.  For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenJSONP
   * @description
   * Creates a new backend definition for JSONP requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */
  createShortMethods('when');


  /**
   * @ngdoc method
   * @name $httpBackend#expect
   * @description
   * Creates a new request expectation.
   *
   * @param {string} method HTTP method.
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current expectation.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *  request is handled. You can save this object for later use and invoke `respond` again in
   *  order to change how a matched request is handled.
   *
   *  - respond –
   *    `{function([status,] data[, headers, statusText])
   *    | function(function(method, url, data, headers)}`
   *    – The respond method takes a set of static data to be returned or a function that can
   *    return an array containing response status (number), response data (string), response
   *    headers (Object), and the text for the status (string). The respond method returns the
   *    `requestHandler` object for possible overrides.
   */
  $httpBackend.expect = function(method, url, data, headers) {
    var expectation = new MockHttpExpectation(method, url, data, headers),
        chain = {
          respond: function(status, data, headers, statusText) {
            expectation.response = createResponse(status, data, headers, statusText);
            return chain;
          }
        };

    expectations.push(expectation);
    return chain;
  };


  /**
   * @ngdoc method
   * @name $httpBackend#expectGET
   * @description
   * Creates a new request expectation for GET requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled. See #expect for more info.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectHEAD
   * @description
   * Creates a new request expectation for HEAD requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectDELETE
   * @description
   * Creates a new request expectation for DELETE requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPOST
   * @description
   * Creates a new request expectation for POST requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPUT
   * @description
   * Creates a new request expectation for PUT requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPATCH
   * @description
   * Creates a new request expectation for PATCH requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectJSONP
   * @description
   * Creates a new request expectation for JSONP requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives an url
   *   and returns true if the url matches the current definition.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */
  createShortMethods('expect');


  /**
   * @ngdoc method
   * @name $httpBackend#flush
   * @description
   * Flushes all pending requests using the trained responses.
   *
   * @param {number=} count Number of responses to flush (in the order they arrived). If undefined,
   *   all pending requests will be flushed. If there are no pending requests when the flush method
   *   is called an exception is thrown (as this typically a sign of programming error).
   */
  $httpBackend.flush = function(count, digest) {
    if (digest !== false) $rootScope.$digest();
    if (!responses.length) throw new Error('No pending request to flush !');

    if (angular.isDefined(count) && count !== null) {
      while (count--) {
        if (!responses.length) throw new Error('No more pending request to flush !');
        responses.shift()();
      }
    } else {
      while (responses.length) {
        responses.shift()();
      }
    }
    $httpBackend.verifyNoOutstandingExpectation(digest);
  };


  /**
   * @ngdoc method
   * @name $httpBackend#verifyNoOutstandingExpectation
   * @description
   * Verifies that all of the requests defined via the `expect` api were made. If any of the
   * requests were not made, verifyNoOutstandingExpectation throws an exception.
   *
   * Typically, you would call this method following each test case that asserts requests using an
   * "afterEach" clause.
   *
   * ```js
   *   afterEach($httpBackend.verifyNoOutstandingExpectation);
   * ```
   */
  $httpBackend.verifyNoOutstandingExpectation = function(digest) {
    if (digest !== false) $rootScope.$digest();
    if (expectations.length) {
      throw new Error('Unsatisfied requests: ' + expectations.join(', '));
    }
  };


  /**
   * @ngdoc method
   * @name $httpBackend#verifyNoOutstandingRequest
   * @description
   * Verifies that there are no outstanding requests that need to be flushed.
   *
   * Typically, you would call this method following each test case that asserts requests using an
   * "afterEach" clause.
   *
   * ```js
   *   afterEach($httpBackend.verifyNoOutstandingRequest);
   * ```
   */
  $httpBackend.verifyNoOutstandingRequest = function() {
    if (responses.length) {
      throw new Error('Unflushed requests: ' + responses.length);
    }
  };


  /**
   * @ngdoc method
   * @name $httpBackend#resetExpectations
   * @description
   * Resets all request expectations, but preserves all backend definitions. Typically, you would
   * call resetExpectations during a multiple-phase test when you want to reuse the same instance of
   * $httpBackend mock.
   */
  $httpBackend.resetExpectations = function() {
    expectations.length = 0;
    responses.length = 0;
  };

  return $httpBackend;


  function createShortMethods(prefix) {
    angular.forEach(['GET', 'DELETE', 'JSONP', 'HEAD'], function(method) {
     $httpBackend[prefix + method] = function(url, headers) {
       return $httpBackend[prefix](method, url, undefined, headers);
     };
    });

    angular.forEach(['PUT', 'POST', 'PATCH'], function(method) {
      $httpBackend[prefix + method] = function(url, data, headers) {
        return $httpBackend[prefix](method, url, data, headers);
      };
    });
  }
}

function MockHttpExpectation(method, url, data, headers) {

  this.data = data;
  this.headers = headers;

  this.match = function(m, u, d, h) {
    if (method != m) return false;
    if (!this.matchUrl(u)) return false;
    if (angular.isDefined(d) && !this.matchData(d)) return false;
    if (angular.isDefined(h) && !this.matchHeaders(h)) return false;
    return true;
  };

  this.matchUrl = function(u) {
    if (!url) return true;
    if (angular.isFunction(url.test)) return url.test(u);
    if (angular.isFunction(url)) return url(u);
    return url == u;
  };

  this.matchHeaders = function(h) {
    if (angular.isUndefined(headers)) return true;
    if (angular.isFunction(headers)) return headers(h);
    return angular.equals(headers, h);
  };

  this.matchData = function(d) {
    if (angular.isUndefined(data)) return true;
    if (data && angular.isFunction(data.test)) return data.test(d);
    if (data && angular.isFunction(data)) return data(d);
    if (data && !angular.isString(data)) {
      return angular.equals(angular.fromJson(angular.toJson(data)), angular.fromJson(d));
    }
    return data == d;
  };

  this.toString = function() {
    return method + ' ' + url;
  };
}

function createMockXhr() {
  return new MockXhr();
}

function MockXhr() {

  // hack for testing $http, $httpBackend
  MockXhr.$$lastInstance = this;

  this.open = function(method, url, async) {
    this.$$method = method;
    this.$$url = url;
    this.$$async = async;
    this.$$reqHeaders = {};
    this.$$respHeaders = {};
  };

  this.send = function(data) {
    this.$$data = data;
  };

  this.setRequestHeader = function(key, value) {
    this.$$reqHeaders[key] = value;
  };

  this.getResponseHeader = function(name) {
    // the lookup must be case insensitive,
    // that's why we try two quick lookups first and full scan last
    var header = this.$$respHeaders[name];
    if (header) return header;

    name = angular.lowercase(name);
    header = this.$$respHeaders[name];
    if (header) return header;

    header = undefined;
    angular.forEach(this.$$respHeaders, function(headerVal, headerName) {
      if (!header && angular.lowercase(headerName) == name) header = headerVal;
    });
    return header;
  };

  this.getAllResponseHeaders = function() {
    var lines = [];

    angular.forEach(this.$$respHeaders, function(value, key) {
      lines.push(key + ': ' + value);
    });
    return lines.join('\n');
  };

  this.abort = angular.noop;
}


/**
 * @ngdoc service
 * @name $timeout
 * @description
 *
 * This service is just a simple decorator for {@link ng.$timeout $timeout} service
 * that adds a "flush" and "verifyNoPendingTasks" methods.
 */

angular.mock.$TimeoutDecorator = ['$delegate', '$browser', function($delegate, $browser) {

  /**
   * @ngdoc method
   * @name $timeout#flush
   * @description
   *
   * Flushes the queue of pending tasks.
   *
   * @param {number=} delay maximum timeout amount to flush up until
   */
  $delegate.flush = function(delay) {
    $browser.defer.flush(delay);
  };

  /**
   * @ngdoc method
   * @name $timeout#verifyNoPendingTasks
   * @description
   *
   * Verifies that there are no pending tasks that need to be flushed.
   */
  $delegate.verifyNoPendingTasks = function() {
    if ($browser.deferredFns.length) {
      throw new Error('Deferred tasks to flush (' + $browser.deferredFns.length + '): ' +
          formatPendingTasksAsString($browser.deferredFns));
    }
  };

  function formatPendingTasksAsString(tasks) {
    var result = [];
    angular.forEach(tasks, function(task) {
      result.push('{id: ' + task.id + ', ' + 'time: ' + task.time + '}');
    });

    return result.join(', ');
  }

  return $delegate;
}];

angular.mock.$RAFDecorator = ['$delegate', function($delegate) {
  var rafFn = function(fn) {
    var index = rafFn.queue.length;
    rafFn.queue.push(fn);
    return function() {
      rafFn.queue.splice(index, 1);
    };
  };

  rafFn.queue = [];
  rafFn.supported = $delegate.supported;

  rafFn.flush = function() {
    if (rafFn.queue.length === 0) {
      throw new Error('No rAF callbacks present');
    }

    var length = rafFn.queue.length;
    for (var i = 0; i < length; i++) {
      rafFn.queue[i]();
    }

    rafFn.queue = rafFn.queue.slice(i);
  };

  return rafFn;
}];

/**
 *
 */
angular.mock.$RootElementProvider = function() {
  this.$get = function() {
    return angular.element('<div ng-app></div>');
  };
};

/**
 * @ngdoc service
 * @name $controller
 * @description
 * A decorator for {@link ng.$controller} with additional `bindings` parameter, useful when testing
 * controllers of directives that use {@link $compile#-bindtocontroller- `bindToController`}.
 *
 *
 * ## Example
 *
 * ```js
 *
 * // Directive definition ...
 *
 * myMod.directive('myDirective', {
 *   controller: 'MyDirectiveController',
 *   bindToController: {
 *     name: '@'
 *   }
 * });
 *
 *
 * // Controller definition ...
 *
 * myMod.controller('MyDirectiveController', ['log', function($log) {
 *   $log.info(this.name);
 * })];
 *
 *
 * // In a test ...
 *
 * describe('myDirectiveController', function() {
 *   it('should write the bound name to the log', inject(function($controller, $log) {
 *     var ctrl = $controller('MyDirectiveController', { /* no locals &#42;/ }, { name: 'Clark Kent' });
 *     expect(ctrl.name).toEqual('Clark Kent');
 *     expect($log.info.logs).toEqual(['Clark Kent']);
 *   });
 * });
 *
 * ```
 *
 * @param {Function|string} constructor If called with a function then it's considered to be the
 *    controller constructor function. Otherwise it's considered to be a string which is used
 *    to retrieve the controller constructor using the following steps:
 *
 *    * check if a controller with given name is registered via `$controllerProvider`
 *    * check if evaluating the string on the current scope returns a constructor
 *    * if $controllerProvider#allowGlobals, check `window[constructor]` on the global
 *      `window` object (not recommended)
 *
 *    The string can use the `controller as property` syntax, where the controller instance is published
 *    as the specified property on the `scope`; the `scope` must be injected into `locals` param for this
 *    to work correctly.
 *
 * @param {Object} locals Injection locals for Controller.
 * @param {Object=} bindings Properties to add to the controller before invoking the constructor. This is used
 *                           to simulate the `bindToController` feature and simplify certain kinds of tests.
 * @return {Object} Instance of given controller.
 */
angular.mock.$ControllerDecorator = ['$delegate', function($delegate) {
  return function(expression, locals, later, ident) {
    if (later && typeof later === 'object') {
      var create = $delegate(expression, locals, true, ident);
      angular.extend(create.instance, later);
      return create();
    }
    return $delegate(expression, locals, later, ident);
  };
}];


/**
 * @ngdoc module
 * @name ngMock
 * @packageName angular-mocks
 * @description
 *
 * # ngMock
 *
 * The `ngMock` module provides support to inject and mock Angular services into unit tests.
 * In addition, ngMock also extends various core ng services such that they can be
 * inspected and controlled in a synchronous manner within test code.
 *
 *
 * <div doc-module-components="ngMock"></div>
 *
 */
angular.module('ngMock', ['ng']).provider({
  $browser: angular.mock.$BrowserProvider,
  $exceptionHandler: angular.mock.$ExceptionHandlerProvider,
  $log: angular.mock.$LogProvider,
  $interval: angular.mock.$IntervalProvider,
  $httpBackend: angular.mock.$HttpBackendProvider,
  $rootElement: angular.mock.$RootElementProvider
}).config(['$provide', function($provide) {
  $provide.decorator('$timeout', angular.mock.$TimeoutDecorator);
  $provide.decorator('$$rAF', angular.mock.$RAFDecorator);
  $provide.decorator('$rootScope', angular.mock.$RootScopeDecorator);
  $provide.decorator('$controller', angular.mock.$ControllerDecorator);
}]);

/**
 * @ngdoc module
 * @name ngMockE2E
 * @module ngMockE2E
 * @packageName angular-mocks
 * @description
 *
 * The `ngMockE2E` is an angular module which contains mocks suitable for end-to-end testing.
 * Currently there is only one mock present in this module -
 * the {@link ngMockE2E.$httpBackend e2e $httpBackend} mock.
 */
angular.module('ngMockE2E', ['ng']).config(['$provide', function($provide) {
  $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}]);

/**
 * @ngdoc service
 * @name $httpBackend
 * @module ngMockE2E
 * @description
 * Fake HTTP backend implementation suitable for end-to-end testing or backend-less development of
 * applications that use the {@link ng.$http $http service}.
 *
 * *Note*: For fake http backend implementation suitable for unit testing please see
 * {@link ngMock.$httpBackend unit-testing $httpBackend mock}.
 *
 * This implementation can be used to respond with static or dynamic responses via the `when` api
 * and its shortcuts (`whenGET`, `whenPOST`, etc) and optionally pass through requests to the
 * real $httpBackend for specific requests (e.g. to interact with certain remote apis or to fetch
 * templates from a webserver).
 *
 * As opposed to unit-testing, in an end-to-end testing scenario or in scenario when an application
 * is being developed with the real backend api replaced with a mock, it is often desirable for
 * certain category of requests to bypass the mock and issue a real http request (e.g. to fetch
 * templates or static files from the webserver). To configure the backend with this behavior
 * use the `passThrough` request handler of `when` instead of `respond`.
 *
 * Additionally, we don't want to manually have to flush mocked out requests like we do during unit
 * testing. For this reason the e2e $httpBackend flushes mocked out requests
 * automatically, closely simulating the behavior of the XMLHttpRequest object.
 *
 * To setup the application to run with this http backend, you have to create a module that depends
 * on the `ngMockE2E` and your application modules and defines the fake backend:
 *
 * ```js
 *   myAppDev = angular.module('myAppDev', ['myApp', 'ngMockE2E']);
 *   myAppDev.run(function($httpBackend) {
 *     phones = [{name: 'phone1'}, {name: 'phone2'}];
 *
 *     // returns the current list of phones
 *     $httpBackend.whenGET('/phones').respond(phones);
 *
 *     // adds a new phone to the phones array
 *     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
 *       var phone = angular.fromJson(data);
 *       phones.push(phone);
 *       return [200, phone, {}];
 *     });
 *     $httpBackend.whenGET(/^\/templates\//).passThrough();
 *     //...
 *   });
 * ```
 *
 * Afterwards, bootstrap your app with this new module.
 */

/**
 * @ngdoc method
 * @name $httpBackend#when
 * @module ngMockE2E
 * @description
 * Creates a new backend definition.
 *
 * @param {string} method HTTP method.
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
 *   object and returns true if the headers match the current definition.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 *
 *  - respond –
 *    `{function([status,] data[, headers, statusText])
 *    | function(function(method, url, data, headers)}`
 *    – The respond method takes a set of static data to be returned or a function that can return
 *    an array containing response status (number), response data (string), response headers
 *    (Object), and the text for the status (string).
 *  - passThrough – `{function()}` – Any request matching a backend definition with
 *    `passThrough` handler will be passed through to the real backend (an XHR request will be made
 *    to the server.)
 *  - Both methods return the `requestHandler` object for possible overrides.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenGET
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for GET requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenHEAD
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for HEAD requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenDELETE
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for DELETE requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPOST
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for POST requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPUT
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for PUT requests.  For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPATCH
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for PATCH requests.  For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenJSONP
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for JSONP requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */
angular.mock.e2e = {};
angular.mock.e2e.$httpBackendDecorator =
  ['$rootScope', '$timeout', '$delegate', '$browser', createHttpBackendMock];


/**
 * @ngdoc type
 * @name $rootScope.Scope
 * @module ngMock
 * @description
 * {@link ng.$rootScope.Scope Scope} type decorated with helper methods useful for testing. These
 * methods are automatically available on any {@link ng.$rootScope.Scope Scope} instance when
 * `ngMock` module is loaded.
 *
 * In addition to all the regular `Scope` methods, the following helper methods are available:
 */
angular.mock.$RootScopeDecorator = ['$delegate', function($delegate) {

  var $rootScopePrototype = Object.getPrototypeOf($delegate);

  $rootScopePrototype.$countChildScopes = countChildScopes;
  $rootScopePrototype.$countWatchers = countWatchers;

  return $delegate;

  // ------------------------------------------------------------------------------------------ //

  /**
   * @ngdoc method
   * @name $rootScope.Scope#$countChildScopes
   * @module ngMock
   * @description
   * Counts all the direct and indirect child scopes of the current scope.
   *
   * The current scope is excluded from the count. The count includes all isolate child scopes.
   *
   * @returns {number} Total number of child scopes.
   */
  function countChildScopes() {
    // jshint validthis: true
    var count = 0; // exclude the current scope
    var pendingChildHeads = [this.$$childHead];
    var currentScope;

    while (pendingChildHeads.length) {
      currentScope = pendingChildHeads.shift();

      while (currentScope) {
        count += 1;
        pendingChildHeads.push(currentScope.$$childHead);
        currentScope = currentScope.$$nextSibling;
      }
    }

    return count;
  }


  /**
   * @ngdoc method
   * @name $rootScope.Scope#$countWatchers
   * @module ngMock
   * @description
   * Counts all the watchers of direct and indirect child scopes of the current scope.
   *
   * The watchers of the current scope are included in the count and so are all the watchers of
   * isolate child scopes.
   *
   * @returns {number} Total number of watchers.
   */
  function countWatchers() {
    // jshint validthis: true
    var count = this.$$watchers ? this.$$watchers.length : 0; // include the current scope
    var pendingChildHeads = [this.$$childHead];
    var currentScope;

    while (pendingChildHeads.length) {
      currentScope = pendingChildHeads.shift();

      while (currentScope) {
        count += currentScope.$$watchers ? currentScope.$$watchers.length : 0;
        pendingChildHeads.push(currentScope.$$childHead);
        currentScope = currentScope.$$nextSibling;
      }
    }

    return count;
  }
}];


if (window.jasmine || window.mocha) {

  var currentSpec = null,
      annotatedFunctions = [],
      isSpecRunning = function() {
        return !!currentSpec;
      };

  angular.mock.$$annotate = angular.injector.$$annotate;
  angular.injector.$$annotate = function(fn) {
    if (typeof fn === 'function' && !fn.$inject) {
      annotatedFunctions.push(fn);
    }
    return angular.mock.$$annotate.apply(this, arguments);
  };


  (window.beforeEach || window.setup)(function() {
    annotatedFunctions = [];
    currentSpec = this;
  });

  (window.afterEach || window.teardown)(function() {
    var injector = currentSpec.$injector;

    annotatedFunctions.forEach(function(fn) {
      delete fn.$inject;
    });

    angular.forEach(currentSpec.$modules, function(module) {
      if (module && module.$$hashKey) {
        module.$$hashKey = undefined;
      }
    });

    currentSpec.$injector = null;
    currentSpec.$modules = null;
    currentSpec = null;

    if (injector) {
      injector.get('$rootElement').off();
    }

    // clean up jquery's fragment cache
    angular.forEach(angular.element.fragments, function(val, key) {
      delete angular.element.fragments[key];
    });

    MockXhr.$$lastInstance = null;

    angular.forEach(angular.callbacks, function(val, key) {
      delete angular.callbacks[key];
    });
    angular.callbacks.counter = 0;
  });

  /**
   * @ngdoc function
   * @name angular.mock.module
   * @description
   *
   * *NOTE*: This function is also published on window for easy access.<br>
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * This function registers a module configuration code. It collects the configuration information
   * which will be used when the injector is created by {@link angular.mock.inject inject}.
   *
   * See {@link angular.mock.inject inject} for usage example
   *
   * @param {...(string|Function|Object)} fns any number of modules which are represented as string
   *        aliases or as anonymous module initialization functions. The modules are used to
   *        configure the injector. The 'ng' and 'ngMock' modules are automatically loaded. If an
   *        object literal is passed they will be registered as values in the module, the key being
   *        the module name and the value being what is returned.
   */
  window.module = angular.mock.module = function() {
    var moduleFns = Array.prototype.slice.call(arguments, 0);
    return isSpecRunning() ? workFn() : workFn;
    /////////////////////
    function workFn() {
      if (currentSpec.$injector) {
        throw new Error('Injector already created, can not register a module!');
      } else {
        var modules = currentSpec.$modules || (currentSpec.$modules = []);
        angular.forEach(moduleFns, function(module) {
          if (angular.isObject(module) && !angular.isArray(module)) {
            modules.push(function($provide) {
              angular.forEach(module, function(value, key) {
                $provide.value(key, value);
              });
            });
          } else {
            modules.push(module);
          }
        });
      }
    }
  };

  /**
   * @ngdoc function
   * @name angular.mock.inject
   * @description
   *
   * *NOTE*: This function is also published on window for easy access.<br>
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * The inject function wraps a function into an injectable function. The inject() creates new
   * instance of {@link auto.$injector $injector} per test, which is then used for
   * resolving references.
   *
   *
   * ## Resolving References (Underscore Wrapping)
   * Often, we would like to inject a reference once, in a `beforeEach()` block and reuse this
   * in multiple `it()` clauses. To be able to do this we must assign the reference to a variable
   * that is declared in the scope of the `describe()` block. Since we would, most likely, want
   * the variable to have the same name of the reference we have a problem, since the parameter
   * to the `inject()` function would hide the outer variable.
   *
   * To help with this, the injected parameters can, optionally, be enclosed with underscores.
   * These are ignored by the injector when the reference name is resolved.
   *
   * For example, the parameter `_myService_` would be resolved as the reference `myService`.
   * Since it is available in the function body as _myService_, we can then assign it to a variable
   * defined in an outer scope.
   *
   * ```
   * // Defined out reference variable outside
   * var myService;
   *
   * // Wrap the parameter in underscores
   * beforeEach( inject( function(_myService_){
   *   myService = _myService_;
   * }));
   *
   * // Use myService in a series of tests.
   * it('makes use of myService', function() {
   *   myService.doStuff();
   * });
   *
   * ```
   *
   * See also {@link angular.mock.module angular.mock.module}
   *
   * ## Example
   * Example of what a typical jasmine tests looks like with the inject method.
   * ```js
   *
   *   angular.module('myApplicationModule', [])
   *       .value('mode', 'app')
   *       .value('version', 'v1.0.1');
   *
   *
   *   describe('MyApp', function() {
   *
   *     // You need to load modules that you want to test,
   *     // it loads only the "ng" module by default.
   *     beforeEach(module('myApplicationModule'));
   *
   *
   *     // inject() is used to inject arguments of all given functions
   *     it('should provide a version', inject(function(mode, version) {
   *       expect(version).toEqual('v1.0.1');
   *       expect(mode).toEqual('app');
   *     }));
   *
   *
   *     // The inject and module method can also be used inside of the it or beforeEach
   *     it('should override a version and test the new version is injected', function() {
   *       // module() takes functions or strings (module aliases)
   *       module(function($provide) {
   *         $provide.value('version', 'overridden'); // override version here
   *       });
   *
   *       inject(function(version) {
   *         expect(version).toEqual('overridden');
   *       });
   *     });
   *   });
   *
   * ```
   *
   * @param {...Function} fns any number of functions which will be injected using the injector.
   */



  var ErrorAddingDeclarationLocationStack = function(e, errorForStack) {
    this.message = e.message;
    this.name = e.name;
    if (e.line) this.line = e.line;
    if (e.sourceId) this.sourceId = e.sourceId;
    if (e.stack && errorForStack)
      this.stack = e.stack + '\n' + errorForStack.stack;
    if (e.stackArray) this.stackArray = e.stackArray;
  };
  ErrorAddingDeclarationLocationStack.prototype.toString = Error.prototype.toString;

  window.inject = angular.mock.inject = function() {
    var blockFns = Array.prototype.slice.call(arguments, 0);
    var errorForStack = new Error('Declaration Location');
    return isSpecRunning() ? workFn.call(currentSpec) : workFn;
    /////////////////////
    function workFn() {
      var modules = currentSpec.$modules || [];
      var strictDi = !!currentSpec.$injectorStrict;
      modules.unshift('ngMock');
      modules.unshift('ng');
      var injector = currentSpec.$injector;
      if (!injector) {
        if (strictDi) {
          // If strictDi is enabled, annotate the providerInjector blocks
          angular.forEach(modules, function(moduleFn) {
            if (typeof moduleFn === "function") {
              angular.injector.$$annotate(moduleFn);
            }
          });
        }
        injector = currentSpec.$injector = angular.injector(modules, strictDi);
        currentSpec.$injectorStrict = strictDi;
      }
      for (var i = 0, ii = blockFns.length; i < ii; i++) {
        if (currentSpec.$injectorStrict) {
          // If the injector is strict / strictDi, and the spec wants to inject using automatic
          // annotation, then annotate the function here.
          injector.annotate(blockFns[i]);
        }
        try {
          /* jshint -W040 *//* Jasmine explicitly provides a `this` object when calling functions */
          injector.invoke(blockFns[i] || angular.noop, this);
          /* jshint +W040 */
        } catch (e) {
          if (e.stack && errorForStack) {
            throw new ErrorAddingDeclarationLocationStack(e, errorForStack);
          }
          throw e;
        } finally {
          errorForStack = null;
        }
      }
    }
  };


  angular.mock.inject.strictDi = function(value) {
    value = arguments.length ? !!value : true;
    return isSpecRunning() ? workFn() : workFn;

    function workFn() {
      if (value !== currentSpec.$injectorStrict) {
        if (currentSpec.$injector) {
          throw new Error('Injector already created, can not modify strict annotations');
        } else {
          currentSpec.$injectorStrict = value;
        }
      }
    }
  };
}


})(window, window.angular);
