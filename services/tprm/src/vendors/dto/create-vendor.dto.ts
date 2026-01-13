import { IsString, IsOptional, IsEmail, IsIn, ValidateIf } from 'class-validator';

export class CreateVendorDto {
  // organizationId is injected from user context in controller
  @IsString()
  @IsOptional()
  organizationId?: string;

  // vendorId is auto-generated if not provided
  @IsString()
  @IsOptional()
  vendorId?: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  legalName?: string;

  @IsIn(['software_vendor', 'cloud_provider', 'professional_services', 'hardware_vendor', 'consultant'])
  @IsOptional()
  category?: string;

  @IsIn(['tier_1', 'tier_2', 'tier_3', 'tier_4'])
  @IsOptional()
  tier?: string;

  @IsIn(['active', 'inactive', 'pending_onboarding', 'offboarding', 'terminated'])
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  website?: string;

  @IsString()
  @IsOptional()
  primaryContact?: string;

  // Only validate email format if a non-empty value is provided
  @ValidateIf((o) => o.primaryContactEmail && o.primaryContactEmail.length > 0)
  @IsEmail()
  @IsOptional()
  primaryContactEmail?: string;

  @IsString()
  @IsOptional()
  primaryContactPhone?: string;

  @IsString()
  @IsOptional()
  notes?: string;

  @IsString()
  @IsOptional()
  reviewFrequency?: string; // Supports predefined (monthly, quarterly, etc.) or custom_X format
}
